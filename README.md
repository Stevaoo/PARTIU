# Planejamento de Requisitos para Aplicação

## 1. Objetivo da Aplicação
Descreva o propósito da aplicação.
 - Qual problema ela resolve? Facilitar a vida do turista e proporcionar uma experiência de viagem incrível.
 - Quem são os usuários-alvo? Turistas em geral ou até Pessoas locais.
 - Qual problema ela resolve? Poupatempo, ajuda ter uma experencia unica e muita personalizada.
---

## 2. Funcionalidades Principais
Liste as principais funcionalidades que a aplicação deve oferecer.

- **Autenticação**:
  - Cadastro de usuários.
  - Login e Logout.
  - Recuperação de senha.

- **Funcionalidades para Usuários**:
  - Hospedagem
  - Hoteis
  - Restaurantes
  - Atividades em Geral

- **Administração**:
  - Gerenciar usuários.
  - Monitorar atividades
  - Atualizar o site mensalmente
  - Função expositor, ele adicionar seu hotel ,restaurante ou atividade automaticamente

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

## Google Maps API
- **Funcionalidade**: Permite a integração de mapas, pesquisa de locais, rotas, direções e visualização de pontos de interesse.
- **Função**: Ideal para exibir mapas interativos, calcular rotas para atividades ou restaurantes, e encontrar locais próximos.
- **URL**: [Google Maps API](https://developers.google.com/maps/apis-by-platform?hl=pt-br)

## OpenWeatherMap API
- **Funcionalidade**: Fornece informações sobre a previsão do tempo e clima em tempo real.
- **Função**: Muito útil para oferecer previsões meteorológicas para atividades externas ou ao planejar roteiros em diferentes cidades.
- **URL**: [OpenWeatherMap API](https://www.meteoblue.com/weather-api)

## TripAdvisor API
- **Funcionalidade**: Fornece dados sobre destinos, hotéis, restaurantes e pontos turísticos, além de avaliações de usuários.
- **Função**: Para mostrar recomendações de atividades e hotéis baseadas em avaliações de viajantes.
- **URL**: [TripAdvisor API](https://developer-tripadvisor.com/content-api/)

## Booking.com API
- **Funcionalidade**: Fornece dados sobre hotéis e acomodações, incluindo disponibilidade e avaliações.
- **Função**: Para facilitar a busca e reserva de hotéis diretamente no aplicativo.
- **URL**: [Booking.com API](https://developers.booking.com)


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
| id_usuario | INT         | Identificador único do usuário       |
| nome       | VARCHAR(50) | Nome do usuário                      |
| email      | VARCHAR(100)| Email do usuário                     |
| senha      | VARCHAR(255)| Senha criptografada                  |
| data_nasc  | DATE        | Data de nascimento do usuário        |
| data_hora  | VARCHAR     | Data e hora de criação do registro   |

## Tabela: Atividades
| Campo         | Tipo         | Descrição                          |
|---------------|--------------|------------------------------------|
| id_atividade  | INT          | Identificador único da atividade   |
| tipo_atividade| INT          | Nome da atividade                  |
| descricao     | TEXT         | Descrição da atividade             |
| endereco      | VARCHAR(100) | Local da atividade                 |
| preco         | DECIMAL(10,2)| Preço da atividade                 |
| data_atividade| VARCHAR(50)  | Data e hora de criação do registro |


## Tabela: Restaurantes
| Campo         | Tipo        | Descrição                            |
|----------------|--------------|------------------------------------|
| id_restaurante | INT          | Identificador único da             |
| nome           | VARCHAR(100) | Nome do Restaurante                |
| culinaria      | VARCHAR(200) | Tipo culinaria                     |
| endereco       | VARCHAR(300) | Endereço do restaurante            |
| preco_faixa    | VARCHAR(50)  | Faixa de preço                     |
| avaliacao      | DECIMAL(2,1) | Avaliação média (0-5)              |
| telefone       | VARCHAR(11)  | Data de envio                      |

## Tabela: Hotéis
| Campo       | Tipo        | Descrição                          |
|-------------|-------------|------------------------------------|
| id_hotel    | INT         | Identificador único do hotél       |
| nome        | VARCHAR(50) | Nome do hotél                      |
| endereco    | VARCHAR(200)| Endereco do hotél                  |
| avaliacao   | DECIMAL(2,1)| Avaliação média (0-5)              |
| preco       | VARCHAR(50) | Preço por noite do hotél           |
| data_hora   | VARCHAR(100)| Data e hora de criação do registro |

## Tabela: Avaliação
| Campo          | Tipo         | Descrição                          |
|----------------|--------------|------------------------------------|
| id_avaliacao   | INT          | Identificador único da avaliaçao   |
| id_usuario     | INT          | Identificador do usuário           |
| tipo_avaliacao | VARCHAR(100) | Tipo do item avaliado              |
| avaliaacao     | VARCHAR(100) | Identificador do item avaliado     |
| comentarios    | TEXT         | Comentário do usuário              |
| data_avaliacao | DATE         | Data de criação da avaliação       |


---
## 7. Protótipos Visuais
Liste ferramentas ou links de protótipos visuais que mostram como será o layout da aplicação.

**MODELO AVANÇADO**
- https://www.booking.com/?aid=348858&label=pc-br-booking-booking-sd-ab

**MODELO INICIANTE/INTERMEDIARIO**
 - https://www.turismo.rs.gov.br/turismo/roteiro 


 **Figma**: Link para os protótipos do frontend.
 
 **Wireframes**: Desenhos simples de como as páginas principais serão organizadas.

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

- **Gestor de Projeto**: Stevão Rodrigues.
- **Desenvolvedor Backend**: Leandro Guariniri.
- **Desenvolvedor Frontend**: Matheus Mattos e Lucas Florão.
- **Designer UX/UI**: Pedro Nunes.

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

