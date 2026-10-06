/*
 * Escrita do moocamor pelo serviço (hlera_bot, rota /moocamor-api).
 * A leitura continua direto no Firebase (pública). Cada escrita vira uma
 * requisição ao servidor, que valida o caminho e grava com a conta de serviço.
 *
 * Uso: const rootRef = SvcRef.wrap(db.ref("nome"), "nome");
 * Depois, rootRef.child(...).set/update/remove/push funcionam como antes.
 */
(function () {
  var API = "/moocamor-api";
  var PIN_KEY = "moocamorAdminPin";
  var TS = "__ts__";

  function storedPin() {
    try { return sessionStorage.getItem(PIN_KEY) || ""; } catch (e) { return ""; }
  }

  function post(url, body) {
    var headers = { "Content-Type": "application/json" };
    var pin = storedPin();
    if (pin) headers["X-Admin-Pin"] = pin;
    return fetch(API + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    }).then(function (r) {
      if (!r.ok) {
        return r.text().then(function (t) { throw new Error(r.status + " " + t); });
      }
      return r.json();
    });
  }

  function newKey() {
    var t = Date.now().toString(36).padStart(9, "0");
    var rnd = "";
    while (rnd.length < 11) rnd += Math.random().toString(36).slice(2);
    return t + rnd.slice(0, 11);
  }

  function write(path, op, data) {
    return post("/db/write", { op: op, path: path, data: data }).catch(function (e) {
      console.error("[moocamor] escrita falhou em " + path + ":", e);
      throw e;
    });
  }

  // Replaces firebase.database.ServerValue.TIMESTAMP by the server marker.
  function fixTs(v) {
    if (v && typeof v === "object") {
      if (v[".sv"] === "timestamp") return TS;
      var out = Array.isArray(v) ? [] : {};
      Object.keys(v).forEach(function (k) { out[k] = fixTs(v[k]); });
      return out;
    }
    return v;
  }

  function Ref(fb, path) {
    this.fb = fb;
    this.path = path;
    this.key = fb.key;
  }
  Ref.prototype.child = function (k) {
    return new Ref(this.fb.child(k), this.path + "/" + k);
  };
  Ref.prototype.push = function () {
    var k = newKey();
    var r = new Ref(this.fb.child(k), this.path + "/" + k);
    r.key = k;
    return r;
  };
  Ref.prototype.set = function (v) { return write(this.path, "set", fixTs(v)); };
  Ref.prototype.update = function (obj) { return write(this.path, "update", fixTs(obj)); };
  Ref.prototype.remove = function () { return write(this.path, "remove"); };

  // Leituras (on/once/orderBy...) continuam indo direto ao Firebase.
  window.SvcRef = {
    wrap: function (fb, path) {
      var ref = new Ref(fb, path);
      return new Proxy(ref, {
        get: function (target, prop) {
          if (prop in target) return target[prop];
          var v = fb[prop];
          return typeof v === "function" ? v.bind(fb) : v;
        }
      });
    }
  };

  // Verifica o PIN administrativo no servidor (o PIN não fica no JavaScript).
  window.SvcAuth = {
    verify: function (pin) {
      return fetch(API + "/admin/verify", {
        method: "POST",
        headers: { "X-Admin-Pin": pin || "" }
      }).then(function (r) {
        if (r.ok) {
          try { sessionStorage.setItem(PIN_KEY, pin); } catch (e) {}
          return true;
        }
        return false;
      }).catch(function () { return false; });
    }
  };
})();
