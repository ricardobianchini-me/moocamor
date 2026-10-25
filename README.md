# MoocAmor — páginas da Fraternidade do Amor

Páginas estáticas (HTML puro, sem build), publicadas em dois lugares a cada push na `main`:

- https://moocamor.duckdns.org — VM-1 (OCI), `git pull` por cron a cada 5 minutos. É aqui que a escrita funciona.
- https://ricardobianchini-me.github.io/moocamor/ — GitHub Pages (só leitura: não tem a rota `/moocamor-api`).

## Como os dados funcionam

- **Leitura:** cada página lê direto do Firebase Realtime Database (`fraternidadedoamor-ef315`), só no próprio caminho.
- **Escrita:** nunca direto no Firebase. Tudo passa por `db-service.js` → `/moocamor-api` (serviço no `hlera_bot`, VM-1), que grava com a conta de serviço.
- **PIN administrativo:** validado no servidor (`MOOCAMOR_ADMIN_PIN` no `.env` da VM-1). Não fica no código das páginas.

| Página | Pasta | Caminho no Firebase |
|---|---|---|
| Escala da Barraca do Macarrão | `escala/` | `escalaMacarrao` |
| Arrecadação do Macarrão | `macarrao/` | `arrecadacaoMacarrao` |
| Pesquisa do Futuro | `pesquisa-futuro/` | `pesquisaMoocAmor` |
| Lições Aprendidas (Good, Bad & Ugly) | `licoesdamoocamor/` | `licoesMoocamor` |
| Estudo de Obras Espíritas | `LivrosEscolaMediuns/` | `livrosEspiritas` |
| Espaço Jovem: site da proposta | `espacojovem/` (estilo em `estilo.css`) | só lê a contagem de ideias |
| Espaço Jovem: painel de ideias | `espacojovem/ideias/` (`escoladejovens/` redireciona para cá) | `escolaJovens` (nome antigo mantido para não perder os dados) |
| Espaço Jovem: área dos professores | `espacojovem/professores/`; aulas em `professores/aulas.js` (o site lê os títulos daqui) | nenhum. O PIN só esconde a tela: o conteúdo é público no repositório |
| Espaço Jovem: enquete das famílias | `espacojovem/enquete/` | `espacoJovemEnquete/respostas` (escrita pública, **sem leitura pública**: não entra em `database.rules.json` porque tem nome e WhatsApp; respostas só pelo console do Firebase) |

## Configuração versionada

| Arquivo | O que controla | Como entra em vigor |
|---|---|---|
| `config/caminhos-publicos.json` | Caminhos que aceitam escrita **sem PIN** (formulários abertos ao público) | Sozinho: o serviço relê o arquivo depois do `git pull` da VM (até 5 min) |
| `firebase/database.rules.json` | Quem pode **ler** cada caminho direto do Firebase | Manual: colar no console do Firebase → Realtime Database → Regras → Publicar |

## Criar uma página nova que grava dados

1. Crie a pasta com o `index.html`. Inclua `<script src="../db-service.js"></script>` e use
   `const rootRef = SvcRef.wrap(db.ref("meuCaminho"), "meuCaminho");`. Para o PIN, use `SvcAuth.verify(pin)`.
2. Em `firebase/database.rules.json`, acrescente `"meuCaminho": { ".read": true }` e publique as regras no console.
   Sem isso a página não carrega os dados.
3. Se o público (sem PIN) precisa enviar algo, acrescente o prefixo em `config/caminhos-publicos.json`,
   sempre no nível da coleção (`meuCaminho/respostas/`), nunca a raiz da página.
4. Acrescente a linha na tabela acima, faça commit e push na `main`.
5. Depois de até 5 minutos, teste em moocamor.duckdns.org: envie um registro de teste e apague com o PIN.
