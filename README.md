# Planejamento de Requisitos para Aplicação

## 1. Objetivo da Aplicação
Descreva o propósito da aplicação. Qual problema ela resolve? Quem são os usuários-alvo?
Descreva o propósito da aplicação - Facilitar a vida do turista e proporcionar uma experiência de viagem incrível
Qual problema ela resolve? Poupatempo. desconhecimento geográfico
Quem são os usuários-alvo?  Turistas em geral ou até Pessoas locais 


---

## 2. Funcionalidades Principais
Liste as principais funcionalidades que a aplicação deve oferecer.

- **Autenticação**:
  - Cadastro de usuários.
  - Login e Logout.
  - Recuperação de senha.

- **Funcionalidades para Usuários**:
  - Criar e enviar mensagens.
  - Enviar desenhos juntamente com as mensagens.
  - Receber mensagens aleatórias de outros usuários.
  - Editar perfil e preferências.

- **Administração**:
  - Gerenciar usuários.
  - Monitorar atividades.

---

## 3. Requisitos Não Funcionais
Estes são os aspectos que afetam o desempenho, a segurança e a experiência geral da aplicação.
- Performance:
  - Tempo de resposta de até 2 segundos para ações de envio de mensagens.
  - Suporte a até 5000 usuários simultâneos.

- Segurança:
  - Criptografia de senhas.
  - Controle de acesso seguro para usuários e administradores.
  - Proteção contra ataques comuns (ex.: SQL Injection, XSS).

- Compatibilidade:
  - Compatível com os principais navegadores (Chrome, Opera, Safari, Edge).
  - Responsividade para dispositivos móveis e desktops.

---

## 4. Requisitos Técnicos
Defina as tecnologias que serão utilizadas, tanto no frontend quanto no backend, além do banco de dados e hospedagem.

- **Frontend**:
  - Framework: React ou Vue.js.
  - Biblioteca de componentes: Material UI ou Bootstrap.
  - Responsividade: CSS Grid/Flexbox.

- **Backend**:
  - Linguagem: Node.js com Express.js.
  - APIs: REST (ou GraphQL).

- **Banco de Dados**:
  - Tipo: Relacional (MySQL).
  - Estrutura: Tabelas ou coleções para usuários, mensagens, etc.

- **Hospedagem e Infraestrutura**:
  - Hospedagem: AWS, DigitalOcean ou Heroku.
  - Banco de Dados: RDS ou serviço gerenciado de banco de dados.
  - CDN: Cloudflare para acelerar a entrega de conteúdo.

---

## 5. Definição das APIs

### 5.1 APIs Internas
Estas são as APIs que a aplicação vai fornecer para que o frontend se comunique com o backend. Elas permitem que os usuários interajam com o sistema (ex.: login, envio de mensagens).

| Método | Rota           | Descrição                           | Parâmetros              | Resposta                     |
|--------|----------------|-------------------------------------|-------------------------|------------------------------|
| POST   | /login          | Autenticar usuário                  | { email, senha }         | Token de autenticação         |
| POST   | /register       | Registrar novo usuário              | { nome, email, senha }   | Confirmação de registro       |
| GET    | /messages       | Obter mensagens recebidas           | Token de autenticação    | Lista de mensagens            |
| POST   | /messages       | Enviar nova mensagem                | { conteúdo, desenho }    | Confirmação de envio          |
| PUT    | /profile        | Atualizar informações de perfil     | { nome, preferências }   | Perfil atualizado             |

### 5.2 APIs de Terceiros (Externas)
Estas são APIs de serviços externos que sua aplicação vai consumir para adicionar funcionalidades ou melhorar a experiência do usuário. Algumas APIs populares que podem ser utilizadas:

- **API de Autenticação** (ex.: Auth0, Firebase Auth):
  - Usada para gerenciar o login de usuários de forma segura.
  - **URL**: `https://auth0.com/docs/api`
  - **Função**: Facilitar a autenticação sem a necessidade de implementar do zero.
  
- **API de Armazenamento de Arquivos** (ex.: AWS S3, Firebase Storage):
  - Usada para armazenar imagens ou arquivos, como os desenhos enviados pelos usuários.
  - **URL**: `https://docs.aws.amazon.com/s3/index.html`
  - **Função**: Permitir que a aplicação armazene grandes arquivos em um ambiente externo, escalável e seguro.

- **API de Envio de Emails** (ex.: SendGrid, Mailgun):
  - Usada para enviar emails de confirmação, recuperação de senha, etc.
  - **URL**: `https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/`
  - **Função**: Gerenciar o envio de emails automáticos sem a necessidade de um servidor de emails próprio.

- **API de Geolocalização** (ex.: Google Maps API):
  - Usada para exibir a localização de usuários, ou verificar a localização de quem envia ou recebe mensagens.
  - **URL**: `https://developers.google.com/maps/documentation`
  - **Função**: Adicionar mapas e localização à aplicação.

### 5.3 Integração com APIs de Terceiros
Para utilizar essas APIs externas, você precisará configurar chaves de API (API keys), que são credenciais para acessar esses serviços de forma segura. Cada serviço geralmente oferece documentação detalhada sobre como integrar a API ao seu sistema.

**Exemplo de Fluxo de Integração com uma API Externa**:
1. **Obter uma chave de API**: Vá ao site da API (ex.: Auth0) e crie uma conta. Geração da chave de API.
2. **Configurar no Backend**: Adicione essa chave como uma variável de ambiente para garantir segurança.
3. **Chamar a API no código**: Usar a chave de API no backend para autenticar e fazer chamadas de serviço.

---

## 6. Modelo de Dados
Defina as tabelas ou coleções que serão usadas no banco de dados.

## Tabela: Usuários
| Campo      | Tipo        | Descrição                            |
|------------|-------------|--------------------------------------|
| usuario_id | INT         | Identificador único do usuário       |
| nome       | VARCHAR(50) | Nome do usuário                      |
| email      | VARCHAR(100)| Email do usuário                     |
| senha      | VARCHAR(255)| Senha criptografada                  |
| data_nasc  | DATE        | Data de nascimento do usuário        |
| data_hora  | VARCHAR     | Data e hora de criação do registro   |

## Tabela: Atividades
| Campo         | Tipo        | Descrição                          |
|---------------|-------------|------------------------------------|
| atividade_id  | INT         | Identificador único da atividade   |
| nome          | INT         | Nome da atividade                  |
| descrição     | TEXT        | Descrição da atividade             |
| local         | Varchar(100)| Local da atividade                 |
| preço         | Varchar(50) | Preço da atividade                 |
| data_hora     | Varchar(50) | Data e hora de criação do registro |


## Tabela: Restaurantes
| Campo         | Tipo        | Descrição                            |
|----------------|--------------|------------------------------------|
| restaurante_id | INT          | Identificador único da             |
| nome           | Varchar(100) | Nome do Restaurante                |
| tipo_culinaria | Varchar(200) | Tipo culinaria                     |
| local          | Varchar(300) | Endereço do restaurante            |
| preço_faixa    | Varchar(50)  | Faixa de preço                     |
| avaliaçao      | DECIMAL(2,1) | Avaliação média (0-5)              |
| enviado_em     | Varchar(50)  | Data de envio                      |

## Tabela: Hotéis
| Campo       | Tipo        | Descrição                          |
|-------------|-------------|------------------------------------|
| hotel_id    | INT         | Identificador único do hotél       |
| nome        | Varchar(50) | Nome do hotél                      |
| endereco    | Varchar(200)| Endereco do hotél                  |
| avaliacao   | DECIMAL(2,1)| Avaliação média (0-5)              |
| preco_noite | Varchar(50) | Preço por noite do hotél           |
| data_hora   | Varchar(100)| Data e hora de criação do registro |

## Tabela: Avaliação
| Campo         | Tipo        | Descrição                            |
|----------------|--------------|------------------------------------|
| avaliacao_id   | INT          | Identificador único da avaliaçao   |
| usuario_id     | INT          | Identificador do usuário           |
| tipo_item      | Varchar(100) | Tipo do item avaliado              |
| avalia_item    | Vachar(100)  | Identificador do item avaliado     |
| nota_user      | DECIMAL(2,1) | Nota dada pelo usuário             |
| comentarios    | TEXT         | Comentário do usuário              |
| enviado_em     | TEXT         | Data de criação  avaliação         |


---

## 7. Protótipos Visuais
Liste ferramentas ou links de protótipos visuais que mostram como será o layout da aplicação.

- **Figma**: Link para os protótipos do frontend.
- **Wireframes**: Desenhos simples de como as páginas principais serão organizadas.

---

## 8. Cronograma de Desenvolvimento
Defina um cronograma com as fases do projeto e estimativas de tempo para cada etapa.

| Fase                      | Descrição                                    | Tempo Estimado       |
|---------------------------|----------------------------------------------|----------------------|
| **Planejamento**           | Definição de requisitos do sistema, análise de viabilidade, pesquisa de APIs externas (mapas, clima), e elaboração da arquitetura do sistema. | 3 Semanas            |
| **Desenvolvimento do Backend** | Implementação das APIs para gerenciamento de roteiros, integração com APIs externas (mapas, clima), configuração do banco de dados e lógica de negócios. | 2 Meses              |
| **Desenvolvimento do Frontend** | Criação da interface do usuário para a criação e visualização de roteiros, integração com o backend, e implementação de funcionalidades como mapas e previsão do tempo. | 2 Meses              |
| **Testes**                 | Testes funcionais, testes de integração com APIs externas, testes de usabilidade, e correção de bugs. | 3 Semanas            |
| **Implantação**            | Deploy da aplicação em ambiente de produção, configuração dos servidores, e monitoramento inicial. | 2 Semanas            |

---

## 9. Equipe
Liste as pessoas responsáveis por cada área do projeto.

- **Gestor de Projeto**: Nome da pessoa responsável pela gestão do projeto.
- **Desenvolvedor Backend**: Nome da pessoa responsável pelo backend.
- **Desenvolvedor Frontend**: Nome da pessoa responsável pelo frontend.
- **Designer UX/UI**: Nome da pessoa responsável pelo design.

---

## 10. Documentação Técnica
Lembre-se de criar documentação para que os futuros desenvolvedores possam entender o projeto facilmente.

- Documentação das APIs.
- Explicação da estrutura do banco de dados.
- Guia de configuração e deploy.

---

## 11. Considerações Finais
Inclua aqui qualquer outra informação que seja relevante para o desenvolvimento do projeto, como recomendações de bibliotecas, dicas de otimização ou requisitos futuros.

---

