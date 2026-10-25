/*
 * Aulas do Espaço Jovem. Fonte única: o site mostra o planejamento anual e a
 * área dos professores mostra tudo. Base: Projeto Institucional de
 * Evangelização Espírita Infantojuvenil (EspaçoJovem/artefatos no Drive).
 * Para mudar uma aula, edite aqui e publique.
 * Atenção: o repositório é público; não coloque aqui nada que precise ser secreto.
 *
 * Abreviações: LE = O Livro dos Espíritos (questão); ESE = O Evangelho segundo o Espiritismo (capítulo).
 */
window.ESPACO_JOVEM_FONTES = {
  manual: { nome: "Manual do Evangelizador", url: "https://www.manualdoevangelizador.com.br/historias" },
  passatempo: { nome: "Passatempo Espírita (histórias)", url: "https://www.passatempoespirita.com.br/historias/" },
  seara: { nome: "Seara Espírita Infantil (apostila)", url: "https://www.searadomestre.com.br/evangelizacao/apostila.htm" },
  desenhos: { nome: "Desenhos Espíritas", url: "https://linktr.ee/desenhosespiritas" },
  luzinho: { nome: "Luzinho (vídeos para crianças)", url: "https://www.instagram.com/luzinhooguiadeluz/" },
  guto: { nome: "Guto Explica (Espiritismo em 60s)", url: "https://www.instagram.com/gutoexplica/" },
  orientacaoInfancia: { nome: "Orientação à Ação Evangelizadora da Infância (PDF)", url: "https://usesp.org.br/wp-content/uploads/2020/02/orientac3a7c3a3o_infancia.pdf" },
  evangelhoLar: { nome: "Evangelho no Lar e no Coração (USE-SP)", url: "https://usesp.org.br/evangelho-no-lar-e-no-coracao/" },
  familia: { nome: "Família (USE-SP)", url: "https://usesp.org.br/familia/" },
  az: { nome: "Espiritismo de A a Z (FEB)", url: "https://www.sistemas.febnet.org.br/site/az/" },
};

window.ESPACO_JOVEM_AULAS = {
  titulo: "Planejamento anual",
  status: "Proposta para aprovação das dirigentes",
  nota: "Um tema por mês, trabalhado nos dois encontros quinzenais. Cada aula tem um roteiro para as crianças (3 a 8 anos) e outro para os maiores (9 a 17 anos); adapte a linguagem a cada grupo. A vivência é um convite, nunca uma cobrança.",
  aulas: [
    {
      mes: "1º mês", titulo: "Acolhimento e amizade", atividade: "Combinados coletivos e jogo cooperativo.",
      objetivo: "Acolher, conhecer cada um e construir juntos os combinados do grupo.",
      criancas: "Roda da acolhida: cada um escolhe um cartão para mostrar como chegou (falar é opcional). Roda de nomes com um novelo de lã. Jogo cooperativo. Combinados com desenhos colados num cartaz.",
      maiores: "Roda de escuta: o que esperam do Espaço Jovem e quais atividades gostariam de fazer (ouvir antes de fechar o programa). Combinados construídos pelo grupo. Jogo cooperativo com papéis variados.",
      vivencia: "Fazer um gesto de acolhida a alguém durante a semana.",
      referencias: [], fontes: ["desenhos"],
    },
    {
      mes: "2º mês", titulo: "Criação e gratidão", atividade: "Mural, desenho e cuidado com a natureza.",
      objetivo: "Perceber Deus como causa de tudo o que existe e cultivar a gratidão.",
      criancas: "Observação da natureza com os sentidos (folhas, flores, céu). Mural da gratidão. Diário ilustrado: “o que Deus criou que eu mais gosto”.",
      maiores: "Conversa a partir da LE 1 e da LE 4: como podemos perceber Deus? Mural da gratidão com palavras, fotos e poemas.",
      vivencia: "Cuidar de uma planta ou evitar desperdícios em casa.",
      referencias: ["LE 1: “Deus é a inteligência suprema, causa primária de todas as coisas.”", "LE 4"], fontes: ["manual", "passatempo"],
    },
    {
      mes: "3º mês", titulo: "Jesus e o Evangelho", atividade: "Teatro de parábolas.",
      objetivo: "Conhecer Jesus como modelo e aproximar seus ensinamentos do dia a dia.",
      criancas: "História: “Deixai vir a mim as criancinhas”. Dramatização simples de uma parábola. Cartões de atitudes. Criar juntos a prece do grupo (participação facultativa).",
      maiores: "LE 625: Jesus como modelo. Dramatizar parábolas (Bom Samaritano, Filho Pródigo, O Semeador). Histórias com finais alternativos: “o que Jesus faria?”.",
      vivencia: "Praticar uma gentileza ou acolher alguém.",
      referencias: ["LE 625", "ESE cap. XXVII (a prece)"], fontes: ["seara", "desenhos"],
    },
    {
      mes: "4º mês", titulo: "Sentimentos e escolhas", atividade: "Oficina de emoções e histórias.",
      objetivo: "Reconhecer as próprias emoções e refletir sobre as escolhas e suas consequências.",
      criancas: "Cartões de emoções e termômetro das emoções. Teatro de fantoches: o que fazer quando fico bravo ou triste. Respiração do balão.",
      maiores: "LE 919 (“Conhece-te a ti mesmo”). Semáforo das escolhas. Histórias com diferentes desfechos. Raiva, ansiedade e comparação nas redes. Técnica simples de respiração.",
      vivencia: "Reconhecer um erro e pensar em como repará-lo.",
      referencias: ["LE 919"], fontes: ["desenhos", "luzinho"],
    },
    {
      mes: "5º mês", titulo: "Família e diálogo", atividade: "Encontro com responsáveis e atividade artística.",
      objetivo: "Valorizar a família, a escuta e o diálogo, respeitando as diferentes formações familiares.",
      criancas: "Desenho ou colagem “quem cuida de mim”, sem expor situações familiares. Cartão para alguém da família.",
      maiores: "Roda de diálogo sobre convivência em casa, escuta e limites. Preparar uma apresentação artística para o encontro com os responsáveis.",
      vivencia: "Agradecer, escutar ou colaborar em casa.",
      referencias: [], fontes: ["familia"],
    },
    {
      mes: "6º mês", titulo: "Caridade e solidariedade", atividade: "Projeto comunitário do bem.",
      objetivo: "Viver a caridade na prática, junto com a ação social da casa.",
      criancas: "Oficina do bem: cartões e desenhos para acompanhar as cestas básicas da casa. Campanha solidária (alimentos ou agasalho).",
      maiores: "ESE cap. XV e LE 886 (o verdadeiro sentido da caridade). Planejar e realizar uma ação comunitária com a ação social da casa.",
      vivencia: "Participar de uma ação de cuidado, respeitando a dignidade de todos.",
      referencias: ["ESE cap. XV", "LE 886"], fontes: ["manual"],
    },
    {
      mes: "7º mês", titulo: "Progresso espiritual", atividade: "Histórias, perguntas e reflexão.",
      objetivo: "Compreender a imortalidade, a reencarnação e o progresso como oportunidades de aprender, sem medo nem culpa.",
      criancas: "Analogia da roupa: o corpo é a roupa que o espírito usa nesta vida. Jornada do aprendizado: trilha com desafios do bem. Histórias sobre crescimento.",
      maiores: "LE 134 e LE 166; ESE cap. IV. Perguntas e respostas sobre imortalidade e reencarnação como escola de progresso. Nunca atribuir sofrimentos a supostos erros de vidas passadas.",
      vivencia: "Escolher uma atitude para desenvolver, sem culpabilizar o sofrimento.",
      referencias: ["LE 134", "LE 166", "ESE cap. IV"], fontes: ["passatempo", "guto", "az"],
    },
    {
      mes: "8º mês", titulo: "Convivência", atividade: "Música, jogos e desafios cooperativos.",
      objetivo: "Fortalecer a amizade, o respeito às diferenças e a inclusão.",
      criancas: "Teia da amizade. Jogos cooperativos. Mural de palavras acolhedoras. Rodas de cantigas.",
      maiores: "Construção de pontes (desafio que só se completa em conjunto). Conversa sobre amizade, redes sociais, exclusão e bullying. ESE cap. XI.",
      vivencia: "Incluir alguém que costuma ficar de fora.",
      referencias: ["ESE cap. XI"], fontes: ["luzinho", "guto"],
    },
    {
      mes: "9º mês", titulo: "Perdão e reparação", atividade: "Dramatização e resolução de conflitos.",
      objetivo: "Aprender a pedir desculpas, perdoar e reparar, sem humilhação.",
      criancas: "História sobre perdão. Teatro de fantoches: “o que posso fazer para consertar?”.",
      maiores: "ESE cap. X (perdão das ofensas). Teatro da vida cotidiana e improvisação de cenas com diferentes desfechos. Teatro de sombras para quem prefere não se expor.",
      vivencia: "Reconhecer um erro e repará-lo, ou perdoar alguém.",
      referencias: ["ESE cap. X"], fontes: ["seara"],
    },
    {
      mes: "10º mês", titulo: "Cuidado com a vida", atividade: "Projeto de sustentabilidade.",
      objetivo: "Cuidar da vida em todas as formas: o próprio corpo, as pessoas, os animais e a natureza.",
      criancas: "Reciclando e criando: brinquedos e instrumentos com materiais reutilizáveis. Conversa sobre o cuidado com os animais.",
      maiores: "Projeto de sustentabilidade para a casa ou o bairro. Cuidado consigo: saúde emocional e pedir ajuda quando precisar.",
      vivencia: "Cuidar de uma planta, de um animal ou de um espaço comum.",
      referencias: [], fontes: ["manual"],
    },
    {
      mes: "11º mês", titulo: "Família e Evangelho", atividade: "Oficina familiar e sarau.",
      objetivo: "Levar o Evangelho para casa e fortalecer os laços familiares.",
      criancas: "Preparar com a família um momento breve de Evangelho no Lar: leitura, conversa e um gesto de gentileza.",
      maiores: "Sarau de poesias e músicas com as famílias. Leitura breve do ESE e conversa sobre a prática no dia a dia.",
      vivencia: "Evangelho no Lar em família, de forma flexível e sem obrigação.",
      referencias: [], fontes: ["evangelhoLar", "familia"],
    },
    {
      mes: "12º mês", titulo: "Gratidão e avaliação", atividade: "Festival de Arte, Amor e Fraternidade.",
      objetivo: "Celebrar o ano, mostrar o que foi vivido e ouvir o grupo.",
      criancas: "Exposição “Atitudes que iluminam”: desenhos, pinturas e cantigas para as famílias. Participação voluntária.",
      maiores: "Organizar o festival, com funções variadas (atuação, narração, cenário, música). Avaliação do ano: o que foi bom, o que mudar, o que querem no próximo.",
      vivencia: "Agradecer a alguém que ajudou durante o ano.",
      referencias: [], fontes: [],
    },
  ],
};

// Anexo do projeto: atividades práticas e acolhimento à neurodiversidade.
window.ESPACO_JOVEM_INCLUSAO = {
  atividades: [
    ["Roda da acolhida", "Cada participante escolhe uma palavra, imagem ou cartão para mostrar como chega. Falar é opcional: pode apontar, desenhar ou apenas observar."],
    ["História com escolhas", "Pause a história em momentos importantes para o grupo escolher. Aceite respostas faladas, gestos, desenhos ou cartões."],
    ["Árvore das boas ações", "Cada um desenha ou escreve uma atitude de gentileza; as folhas formam uma árvore coletiva."],
    ["Teatro de situações", "Encene situações como incluir alguém ou pedir desculpas. Ofereça funções alternativas: narrador, ilustrador, sonoplasta ou observador."],
    ["Música e ritmo", "Canções e instrumentos suaves, com opção sem som alto; dá para acompanhar com gestos ou só observar."],
    ["Arte que acolhe", "Colagem, pintura, modelagem ou construção com recicláveis sobre amizade, cuidado e esperança."],
    ["Missão da semana", "O grupo escolhe uma ação simples e pode compartilhar a experiência depois, sem competição."],
    ["Cine-conversa", "Cenas apropriadas à idade, verificando a classificação indicativa; conversa sobre escolhas, empatia e reparação."],
    ["Jogo cooperativo", "Um desafio que só se conclui em conjunto, com papéis variados."],
    ["Evangelho no Lar em família", "Momento breve e flexível de leitura, conversa e gentileza, sem transformar em obrigação."],
  ],
  principios: [
    ["Princípio", "Diferenças de comunicação, atenção, movimento, processamento sensorial e interação não são falta de interesse, indisciplina ou falha moral."],
    ["Rotina previsível", "Sequência visual do encontro, aviso de mudanças, instruções curtas e transições antecipadas."],
    ["Diferentes formas de participar", "Falar, escrever, apontar, desenhar, usar imagens, fazer gestos ou observar. Sem exigir contato visual, toque, fala em público ou oração em voz alta."],
    ["Ajustes sensoriais", "Lugar tranquilo, menos ruído, pausas de movimento e materiais alternativos."],
    ["Flexibilidade pedagógica", "Tarefas em etapas curtas, exemplos, repetição sem constrangimento e tempo adicional."],
    ["Segurança emocional", "Prevenir bullying e exclusão; não comparar nem expor diagnósticos ou situações familiares; corrigir com serenidade."],
    ["Parceria com responsáveis", "Conversar sobre apoios que funcionam, com confidencialidade. Não exigir laudo como condição de acolhimento."],
    ["Preparação da equipe", "Uma pessoa de referência; estudo de inclusão e acessibilidade. A casa não diagnostica nem substitui atendimento especializado."],
    ["Cuidado doutrinário", "Nunca apresentar a neurodivergência como punição, dívida, falta de fé ou consequência moral."],
  ],
  encontro: [
    ["0–10 min", "Acolhida", "Sequência visual; escolha entre cartão de emoção, desenho ou conversa."],
    ["10–20 min", "História", "História breve com imagens ou objetos concretos."],
    ["20–35 min", "Atividade em estações", "Desenho ou colagem, jogo cooperativo ou dramatização opcional, sobre o mesmo tema."],
    ["35–45 min", "Conversa acessível", "Perguntas curtas, uma por vez, com tempo para pensar; ninguém é obrigado a contar experiências pessoais."],
    ["45–55 min", "Música, pausa ou criação", "Com alternativa silenciosa ou espaço tranquilo."],
    ["55–60 min", "Fechamento", "Retomar a ideia central, antecipar o próximo encontro e propor uma ação opcional."],
  ],
  checklist: [
    "A sequência está visível e as mudanças foram avisadas?",
    "As instruções são curtas e apresentadas de mais de uma forma?",
    "Há opções sem fala, contato visual ou toque?",
    "Existe local tranquilo e possibilidade de pausa sensorial ou de movimento?",
    "A atividade permite diferentes ritmos e maneiras de mostrar o aprendizado?",
    "A equipe sabe acolher sinais de sobrecarga sem punição ou exposição?",
    "A comunicação com a família respeita privacidade e dignidade?",
  ],
  usoMateriais: [
    "Priorizar os documentos de orientação da FEB e da federativa estadual (USE-SP) como base de planejamento.",
    "Escolher histórias, livros, filmes e dinâmicas conforme idade, maturidade e contexto; preparar perguntas que liguem a atividade à vida.",
    "Evitar abordagens baseadas em medo, culpa, constrangimento ou exposição de situações familiares.",
    "Nos encontros on-line, enviar os links antes aos responsáveis e não publicar imagens ou dados de menores sem autorização.",
    "Revisar os links periodicamente e confirmar direitos de uso antes de reproduzir materiais.",
  ],
};
