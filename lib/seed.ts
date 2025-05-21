import 'dotenv/config';
import { connectToDatabase } from './mongodb.ts';
import { ObjectId } from 'mongodb';

async function seed() {
  const { db } = await connectToDatabase();

  console.log('⚙️ Limpando quizzes antigos...');
  await db.collection('quizzes').deleteMany({});

  console.log('🚀 Inserindo novos quizzes...');
  const quizzes = [
    {
      segmento: 'auditoria',
      title: 'Quiz de Auditoria e Consultoria',
      description: 'Teste seus conhecimentos em auditoria e consultoria em bancos de dados.',
      questions: [
        // Questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'O que é o principal objetivo da auditoria em bancos de dados?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Criar novos sistemas', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Monitorar redes sociais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Avaliar segurança, integridade e desempenho dos dados', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Fazer login nos sistemas', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual destes é um benefício da auditoria de dados?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Redução da carga tributária', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Verificação de vulnerabilidades e conformidade', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Redução de funcionários', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Aumento de propaganda online', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é avaliado na integridade dos dados durante uma auditoria?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Velocidade da internet', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Capacidade do servidor', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Precisão, consistência e confiabilidade dos dados', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Popularidade do banco de dados', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual etapa da auditoria identifica riscos e ameaças?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Treinamento da equipe', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Avaliação de desempenho', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Avaliação de segurança', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Backup manual', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é analisado na verificação de desempenho do banco de dados?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Quantidade de usuários conectados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Uso de senhas fortes', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Gargalos de performance e eficiência de operações', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Tamanho do disco rígido', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual ferramenta pode ser usada para sugerir melhorias em um banco de dados auditado?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Marketing digital', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Controles de acesso', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Imagens gráficas', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Impressoras corporativas', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'A auditoria em banco de dados pode recomendar qual ação corretiva?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Otimização de consultas', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Desligamento de servidores', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Envio de e-mails automáticos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Exclusão de backups antigos', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que significa garantir a conformidade na auditoria?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Estar em dia com redes sociais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Estar de acordo com normas e legislações de proteção de dados', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Reduzir o uso de energia', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Trocar todos os softwares', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é uma das atividades finais de uma auditoria?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Exclusão de relatórios', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Geração de relatórios e recomendações', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Troca de banco de dados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Desligamento da rede', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Auditorias eficientes devem estar alinhadas com o quê?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Estratégias de vendas', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Objetivos estratégicos da empresa', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Análise de marketing', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Estrutura de suporte técnico', isCorrect: false },
          ],
        },
        
        // Novas questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'Qual dos seguintes não é um benefício direto de auditorias regulares em bancos de dados?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Maior segurança dos dados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Conformidade com regulamentações', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Aumento imediato de vendas', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Identificação de problemas de desempenho', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Em que fase da auditoria é feita a coleta e análise de amostras de dados?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Planejamento inicial', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Fase de execução', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Elaboração de relatórios', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Monitoramento pós-auditoria', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Quais profissionais devem estar envolvidos em uma auditoria de banco de dados eficiente?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Apenas administradores de banco de dados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Apenas auditores externos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Apenas a equipe de segurança', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Equipe multidisciplinar com DBAs, especialistas em segurança e auditores', isCorrect: true },
          ],
        },
        
        // Questões de verdadeiro ou falso
        {
          id: new ObjectId().toString(),
          question: 'Auditorias internas que focam em eficiência operacional avaliam principalmente indicadores financeiros.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'A segregação de funções é um controle interno fundamental para minimizar riscos operacionais e aumentar a eficiência.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Auditorias de banco de dados devem ser realizadas apenas uma vez por ano para não sobrecarregar a infraestrutura.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'A auditoria contribui diretamente para o cumprimento das regras da LGPD (Lei Geral de Proteção de Dados).',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        
        // Questões com justificativa
        {
          id: new ObjectId().toString(),
          question: 'Por que é importante verificar a consistência e integridade de dados durante uma auditoria? Justifique a importância deste processo em relação à confiabilidade da informação empresarial.',
          type: 'justification',
          dificuldade: 'dificil',
          keywords: ['integridade', 'confiabilidade', 'tomada de decisão', 'qualidade dos dados', 'precisão', 'consistência', 'auditoria', 'conformidade', 'segurança', 'informação empresarial'],
        },
        {
          id: new ObjectId().toString(),
          question: 'Explique como a auditoria em bancos de dados contribui para a segurança da informação e por que o monitoramento contínuo é mais eficaz do que verificações pontuais.',
          type: 'justification',
          dificuldade: 'dificil',
          keywords: ['monitoramento contínuo', 'segurança', 'ameaças', 'vulnerabilidades', 'tempo real', 'detecção precoce', 'prevenção', 'riscos', 'proteção de dados', 'ataques'],
        },
        {
          id: new ObjectId().toString(),
          question: 'Descreva como a auditoria de bancos de dados pode ajudar uma empresa a se manter em conformidade com a LGPD (Lei Geral de Proteção de Dados).',
          type: 'justification',
          dificuldade: 'dificil',
          keywords: ['LGPD', 'conformidade', 'proteção de dados', 'privacidade', 'consentimento', 'acesso', 'direitos dos titulares', 'segurança da informação', 'transparência', 'dados pessoais'],
        },
      ],
    },
    {
      segmento: 'armazenamento',
      title: 'Quiz de Armazenamento de Dados',
      description: 'Teste seus conhecimentos em soluções de armazenamento de dados.',
      questions: [
        // Questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'O que é armazenamento de dados?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Impressão de documentos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Processo de guardar e organizar informações digitais', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Enviar e-mails corporativos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Fazer marketing de conteúdo', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é uma vantagem do armazenamento em nuvem (cloud storage)?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Alta dependência de hardware local', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Limitação fixa de espaço', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Escalabilidade e acesso remoto', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Aumento de custos operacionais', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é um sistema de armazenamento híbrido?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Armazenamento apenas em pen drives', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Backup feito manualmente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Combinação de nuvem com servidores locais', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Backup somente na sede da empresa', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é o objetivo da redundância no armazenamento de dados?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Aumentar a quantidade de backups', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Repetir arquivos desnecessariamente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Garantir cópias seguras em diferentes locais para evitar perda de dados', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Tornar o sistema mais lento', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que significa "escalável" no contexto de armazenamento?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Pode ser acessado por escada', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Cresce com as necessidades da empresa', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Armazena apenas dados antigos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Requer instalação diária', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual prática protege dados sensíveis durante o armazenamento?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Nomear arquivos com números aleatórios', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Criptografar os arquivos', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Fazer cópia impressa', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Ocultar arquivos em pastas', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é armazenamento on-premise?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Armazenamento físico fora da empresa', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Dados guardados em dispositivos móveis', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Dados armazenados em servidores próprios dentro da empresa', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Armazenamento em redes sociais', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual ferramenta é usada para organizar informações de clientes?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Canva', isCorrect: false },
            { id: new ObjectId().toString(), text: 'CRM (Customer Relationship Management)', isCorrect: true },
            { id: new ObjectId().toString(), text: 'WhatsApp', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Google Maps', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que caracteriza um sistema de gestão documental?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Impressão automática de arquivos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Controle digital e estruturado de documentos da empresa', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Envio de arquivos por e-mail', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Cadastro de novos funcionários', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Como o armazenamento de dados contribui para a continuidade do negócio?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Aumenta o número de funcionários', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Garante acesso rápido e seguro às informações críticas', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Facilita a comunicação por redes sociais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Gera relatórios financeiros', isCorrect: false },
          ],
        },
        
        // Novas questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'Qual tecnologia é fundamental para garantir maior velocidade de acesso em sistemas de armazenamento modernos?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Fitas magnéticas', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Discos rígidos convencionais (HDD)', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Unidades de estado sólido (SSD)', isCorrect: true },
            { id: new ObjectId().toString(), text: 'CD-ROMs de alta capacidade', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que significa o termo "data lake" no contexto de armazenamento de dados?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Um backup de dados feito em local refrigerado', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Um repositório centralizado que armazena grandes volumes de dados em seu formato bruto/nativo', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Um sistema exclusivo para armazenamento de imagens e vídeos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Um sistema de armazenamento que só funciona com conexão à internet', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual destas opções representa um desafio específico para armazenamento de big data?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Gerenciar diferentes tipos de dados (estruturados e não estruturados)', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Limitar o acesso apenas a usuários avançados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Reduzir a necessidade de backup', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Imprimir relatórios regularmente', isCorrect: false },
          ],
        },
        
        // Questões de verdadeiro ou falso
        {
          id: new ObjectId().toString(),
          question: 'Um repositório interno armazena apenas informações públicas da empresa.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Backup automatizado e criptografia são práticas que ajudam a proteger contra ataques de ransomware.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'No armazenamento em nuvem (cloud storage), a empresa precisa pagar por toda a capacidade, mesmo que não utilize.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'SLA de 99,99% em soluções de armazenamento refere-se à velocidade de acesso aos dados.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        
        // Questões com justificativa
        {
          id: new ObjectId().toString(),
          question: 'Por que a redundância geográfica é importante em sistemas de armazenamento de dados empresariais? Explique os riscos que ela ajuda a mitigar.',
          type: 'justification',
          dificuldade: 'dificil',
        },
        {
          id: new ObjectId().toString(),
          question: 'Compare as vantagens e desvantagens entre armazenamento na nuvem e armazenamento local (on-premise). Em quais situações cada um seria mais recomendado?',
          type: 'justification',
          dificuldade: 'dificil',
        },
        {
          id: new ObjectId().toString(),
          question: 'Explique como o armazenamento de dados estruturado ajuda a proteger informações pessoais em conformidade com a LGPD. Quais controles são essenciais?',
          type: 'justification',
          dificuldade: 'dificil',
        },
      ],
    },
    {
      segmento: 'gerenciamento',
      title: 'Quiz de Gerenciamento e Backup',
      description: 'Teste seus conhecimentos em gerenciamento de dados empresariais.',
      questions: [
        // Questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'O que significa gerenciar dados em um ambiente corporativo?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Compartilhar arquivos em redes sociais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Administrar, organizar e proteger informações da empresa', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Imprimir relatórios mensalmente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Criar campanhas de marketing digital', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é backup automatizado?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Cópia de segurança feita manualmente todo mês', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Cópia programada de dados feita automaticamente em horários definidos', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Armazenamento de dados em HD externo apenas', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Criação de cópias sem notificação', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual a principal função do monitoramento 24/7?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Monitorar redes sociais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Atualizar os servidores mensalmente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Acompanhar continuamente o desempenho e disponibilidade dos sistemas', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Garantir que todos os dados sejam públicos', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é o papel da análise de performance em gerenciamento de dados?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Verificar a velocidade da internet', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Avaliar e otimizar o desempenho de sistemas e infraestrutura', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Diminuir o número de backups', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Criar gráficos de vendas', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é um objetivo do gerenciamento de projetos de TI?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Diminuir o custo de internet', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Otimizar o uso de redes sociais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Coordenar recursos, prazos e entregas de maneira eficiente', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Eliminar servidores antigos', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual das opções é um risco quando não há gerenciamento adequado de dados?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Redução de espaço físico', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Erros manuais e perda de informações críticas', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Queda de produtividade em redes sociais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Aumento no número de e-mails', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é recuperação de desastres?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Troca de servidores', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Backup de imagens publicitárias', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Estratégia para restaurar dados e operações após falhas ou ataques', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Impressão de relatórios mensais', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Como o gerenciamento estratégico contribui para a empresa?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Automatizando o setor de marketing', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Focando apenas na estética dos relatórios', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Garantindo eficiência operacional e continuidade de negócios', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Diminuindo os custos de papel', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é uma das vantagens de soluções de gerenciamento de dados com SLA garantido?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Menor consumo de energia', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Alta disponibilidade e suporte 24/7', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Redução da produtividade', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Acesso irrestrito a qualquer dado', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é otimização de recursos no contexto de gerenciamento?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Comprar mais servidores', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Eliminar todos os arquivos antigos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Utilizar de forma eficiente hardware, software e pessoal', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Contratar mais equipe de marketing', isCorrect: false },
          ],
        },
        
        // Novas questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'Qual dessas não é uma estratégia comum de backup corporativo?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Backup incremental', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Backup diferencial', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Backup completo (full)', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Backup aleatório', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que significa RPO (Recovery Point Objective) no contexto de gerenciamento de dados?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'A velocidade com que os dados podem ser restaurados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'O tempo máximo aceitável desde o último ponto de recuperação (quantidade máxima de dados que pode ser perdida)', isCorrect: true },
            { id: new ObjectId().toString(), text: 'A quantidade de backups que devem ser mantidos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'O local físico onde os backups são armazenados', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual ferramenta ajuda na automatização de tarefas repetitivas de gerenciamento de dados?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Planilhas manuais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Scripts e ferramentas de agendamento', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Verificação visual periódica', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Delegação para fornecedores externos', isCorrect: false },
          ],
        },
        
        // Questões de verdadeiro ou falso
        {
          id: new ObjectId().toString(),
          question: 'Manter backups geograficamente distribuídos é importante para garantir segurança contra falhas locais ou desastres naturais.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Em um ambiente bem gerenciado, os dados devem ser compartilhados livremente com todos os funcionários para maximizar a transparência.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O gerenciamento proativo de dados é preferível ao reativo porque prevê problemas antes que causem impacto.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'SLA (Service Level Agreement) em TI refere-se principalmente às licenças de software utilizadas pela empresa.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        
        // Questões com justificativa
        {
          id: new ObjectId().toString(),
          question: 'Por que um gerenciamento de dados ineficaz pode causar interrupções frequentes, perda de dados e prejuízos operacionais? Dê exemplos de como isso pode afetar uma empresa.',
          type: 'justification',
          dificuldade: 'dificil',
        },
        {
          id: new ObjectId().toString(),
          question: 'Explique a importância da conformidade regulatória no gerenciamento de dados e como ela se relaciona com a Lei Geral de Proteção de Dados (LGPD).',
          type: 'justification',
          dificuldade: 'dificil',
        },
        {
          id: new ObjectId().toString(),
          question: 'Descreva como a automação pode melhorar o gerenciamento de dados, reduzindo erros humanos e aumentando a eficiência. Dê exemplos de processos que podem ser automatizados.',
          type: 'justification',
          dificuldade: 'dificil',
        },
      ],
    },
    {
      segmento: 'solucoes',
      title: 'Quiz de Soluções de Segurança',
      description: 'Teste seus conhecimentos em soluções de segurança digital para empresas.',
      questions: [
        // Questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'Qual é o principal objetivo da implementação de firewalls e sistemas de detecção de intrusão?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Melhorar o desempenho da rede', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Proteger a rede contra acessos não autorizados', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Criar backup de todos os dados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Monitorar o uso da internet pelos funcionários', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é criptografia de dados avançada?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Técnica para compactar arquivos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Método para proteger dados sensíveis tornando-os ilegíveis para quem não tem autorização', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Sistema para arquivar dados antigos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Ferramenta para organizar arquivos por categoria', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é o tempo de resposta a incidentes mencionado como diferencial nas soluções de segurança?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Menos de 1 hora', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Menos de 30 minutos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Menos de 15 minutos', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Menos de 1 dia', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que caracteriza o monitoramento contínuo oferecido nas soluções de segurança?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verificações mensais de vulnerabilidades', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Vigilância 24/7 com alertas automatizados e resposta imediata', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Auditorias trimestrais de segurança', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Análise semanal dos registros de acesso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que são testes de penetração em segurança digital?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Testes de velocidade da conexão de internet', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Verificação da segurança física do data center', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Simulação de ataques cibernéticos para identificar vulnerabilidades', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Análise do código-fonte para otimização', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que envolve a gestão de identidades como solução de segurança?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Criação de crachás físicos para funcionários', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Controle de acessos com autenticação multifatorial e permissões baseadas em funções', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Registro de endereços residenciais dos colaboradores', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Sistema para criar contas de email corporativas', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é o primeiro passo no processo de implementação de soluções de segurança apresentado?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Planejamento estratégico', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Análise de vulnerabilidades', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Implementação de soluções', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Monitoramento contínuo', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que é recuperação de desastres no contexto das soluções de segurança?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Procedimento para resolver problemas relacionados a desastres naturais', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Protocolo para evacuação do prédio em caso de incêndio', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Estratégias e sistemas para garantir continuidade dos negócios após incidentes de segurança', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Processo de substituição de equipamentos danificados', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é a taxa de eficácia na detecção mencionada nas estatísticas das soluções de segurança?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: '95%', isCorrect: false },
            { id: new ObjectId().toString(), text: '97%', isCorrect: false },
            { id: new ObjectId().toString(), text: '99%', isCorrect: false },
            { id: new ObjectId().toString(), text: '99,9%', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O que caracteriza o planejamento estratégico na implementação de soluções de segurança?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Uso exclusivo de software gratuito', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Desenvolvimento de um plano personalizado de segurança alinhado aos objetivos do negócio', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Instalação padronizada dos mesmos sistemas para todas as empresas', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Foco exclusivo na proteção de dispositivos móveis', isCorrect: false },
          ],
        },
        
        // Novas questões de múltipla escolha
        {
          id: new ObjectId().toString(),
          question: 'Qual destas é uma característica essencial de um sistema de detecção de intrusão eficiente?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Funciona apenas durante o horário comercial', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Detecta apenas ameaças conhecidas (baseadas em assinaturas)', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Capacidade de detectar comportamentos anômalos e ameaças desconhecidas', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Substitui completamente a necessidade de firewalls', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Por que a implementação de soluções de segurança com mínima interrupção operacional é importante?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Para reduzir os custos de implementação', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Para garantir a continuidade dos negócios durante a implementação', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Porque as soluções de segurança são menos eficazes durante o processo de implementação', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Porque os atacantes nunca visam empresas durante implementações', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é a importância de ter mais de 5000 ataques bloqueados na estatística de uma solução de segurança?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Indica apenas que o sistema foi testado muitas vezes', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Demonstra experiência comprovada na detecção e contenção de ameaças reais', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Não tem relevância para a eficácia do sistema', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Significa que o sistema precisa ser atualizado', isCorrect: false },
          ],
        },
        
        // Questões de verdadeiro ou falso
        {
          id: new ObjectId().toString(),
          question: 'A implementação de sistemas de segurança sempre causa interrupções operacionais significativas na empresa.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'As soluções de segurança digital oferecidas conseguiram bloquear mais de 5000 ataques.',
          type: 'true_false',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'A análise de vulnerabilidades deve ser realizada apenas uma vez, no início da implementação de soluções de segurança.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'O monitoramento contínuo mencionado nas soluções de segurança inclui vigilância 24 horas por dia, 7 dias por semana.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        
        // Questões com justificativa
        {
          id: new ObjectId().toString(),
          question: 'Por que a implementação de múltiplas soluções de segurança (firewall, criptografia, monitoramento, etc.) é mais eficaz que confiar em apenas uma? Explique o conceito de defesa em camadas.',
          type: 'justification',
          dificuldade: 'dificil',
        },
        {
          id: new ObjectId().toString(),
          question: 'Explique a importância da análise de vulnerabilidades como primeiro passo no processo de implementação de soluções de segurança. Por que esta etapa é fundamental antes das demais?',
          type: 'justification',
          dificuldade: 'dificil',
        },
        {
          id: new ObjectId().toString(),
          question: 'Descreva como a gestão de identidades com autenticação multifatorial contribui para a segurança corporativa. Quais são as vantagens em comparação com sistemas que utilizam apenas senhas?',
          type: 'justification',
          dificuldade: 'dificil',
        },
      ],
    },
  ];

  const result = await db.collection('quizzes').insertMany(quizzes);
  console.log(`✅ ${result.insertedCount} quizzes inseridos com sucesso!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Erro ao popular o banco:', err);
  process.exit(1);
});