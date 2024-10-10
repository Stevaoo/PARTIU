# Planejamento de Requisitos para Aplicação Partiu - Organizador de Bagagem Inteligente

## 1. Objetivo da Aplicação
- **Propósito**: A aplicação "Partiu" visa facilitar a vida dos turistas ao oferecer um organizador de bagagem inteligente. Utilizando IA, a aplicação sugere atividades e itens essenciais para incluir na mala, de acordo com o destino, clima e o estilo de viagem.
- **Usuários-alvo**: Turistas em geral e pessoas locais que desejam otimizar sua experiência de viagem.
- **Problemas que resolve**: A aplicação economiza tempo, ajuda os usuários a terem uma experiência única e personalizada, e garante que não esqueçam itens importantes.

---

## 2. Funcionalidades Principais
- **Autenticação**:
  - Cadastro de usuários.
  - Login e Logout.
  - Recuperação de senha.

- **Organizador de Bagagem**:
  - Sugestão de itens a serem levados na viagem com base no destino e nas atividades selecionadas.

- **Sugestão de Atividades**:
  - Dicas personalizadas de atividades para o destino escolhido, integrando inteligência artificial para proporcionar experiências únicas.

- **Administração**:
  - Gerenciamento de usuários.
  - Monitoramento de atividades.
  - Atualização mensal do site.
  - Função de expositor para que hotéis, restaurantes e atividades possam ser adicionados automaticamente.

---

## 3. Requisitos Não Funcionais
- **Performance**:
  - Tempo de resposta de até 2 segundos para ações de envio de mensagens.
  - Suporte a até 5000 usuários simultâneos.

- **Segurança**:
  - Criptografia de senhas.
  - Controle de acesso seguro para usuários e administradores.
  - Proteção contra ataques comuns (ex.: SQL Injection, XSS).

- **Compatibilidade**:
  - Compatível com os principais navegadores (Chrome, Opera, Safari, Edge).
  - Responsividade para dispositivos móveis e desktops.

---

## 4. Requisitos Técnicos
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

| Método | Rota           | Descrição                           | Parâmetros              | Resposta                        |
|--------|----------------|-------------------------------------|-------------------------|---------------------------------|
| POST   | /login          | Autenticar usuário                  | { email, senha }         | Token de autenticação         |
| POST   | /register       | Registrar novo usuário                { nome, email, senha }   | Confirmação de registro       |
| GET    | /bagagem        | Sugestão de itens de bagagem       | Token de autenticação    | Lista de itens sugeridos       |
| POST   | /atividades     | Sugestão de atividades no destino   | { destino, atividades }  | Lista de atividades sugeridas |

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

### 5.3 Integração com APIs de Terceiros
Para utilizar essas APIs externas, você precisará configurar chaves de API (API keys), que são credenciais para acessar esses serviços de forma segura. Cada serviço geralmente oferece documentação detalhada sobre como integrar a API ao seu sistema.

**DICA: Fluxo de Integração com uma API Externa**:
1. **Obter uma chave de API**: Vá ao site da API (ex.: Auth0) e crie uma conta. Geração da chave de API.
2. **Configurar no Backend**: Adicione essa chave como uma variável de ambiente para garantir segurança.
3. **Chamar a API no código**: Usar a chave de API no backend para autenticar e fazer chamadas de serviço.

---

## 6. Modelo de Dados
Defina as tabelas ou coleções que serão usadas no banco de dados.
### Tabela: `Usuarios`
Esta tabela armazena informações sobre os usuários que utilizam o sistema.

| Campo      | Tipo        | Descrição                            |
|------------|-------------|--------------------------------------|
| `id_usuario` | INT         | Identificador único do usuário       |
| `nome`       | VARCHAR(50) | Nome do usuário                      |
| `email`      | VARCHAR(100)| Email do usuário                     |
| `senha`      | VARCHAR(255)| Senha criptografada                  |
| `data_nasc`  | DATE        | Data de nascimento do usuário        |
| `data_hora`  | date       | Data e hora de criação do registro   |

### Tabela: `Atividades`
Esta tabela armazena detalhes das atividades que os usuários podem realizar durante as viagens.

| Campo           | Tipo         | Descrição                          |
|-----------------|--------------|------------------------------------|
| `id_atividade`  | INT          | Identificador único da atividade   |
| `tipo_atividade`| VARCHAR(50)  | Nome da atividade                  |
| `descricao`     | TEXT         | Descrição da atividade             |
| `endereco`      | VARCHAR(100) | Local da atividade                 |
| `preco`         | DECIMAL(10,2)| Preço da atividade                 |
| `data_atividade`| DATE         | Data da atividade                  |

### Tabela: `Avaliacoes`
Esta tabela contém as avaliações feitas pelos usuários sobre as atividades.

| Campo           | Tipo         | Descrição                          |
|-----------------|--------------|------------------------------------|
| `id_avaliacao`  | INT          | Identificador único da avaliação   |
| `id_usuario`    | INT          | Identificador do usuário           |
| `id_atividade`  | INT          | Identificador da atividade         |
| `avaliacao`     | DECIMAL(2,1) | Nota da avaliação (ex: 4.5)        |
| `comentarios`   | TEXT         | Comentários adicionais do usuário  |
| `data_hora`     | date         | Data e hora da avaliação           |

### Tabela: `Sugestoes`
Tabela para registrar sugestões de itens com base em atividades e destinos.

| Campo           | Tipo         | Descrição                          |
|-----------------|--------------|------------------------------------|
| `id_sugestao`   | INT          | Identificador único da sugestão    |
| `id_usuario`    | INT          | Identificador do usuário           |
| `id_atividade`  | INT          | Identificador da atividade         |
| `item`          | VARCHAR(100) | Nome do item sugerido              |
| `descricao`     | TEXT         | Descrição do item                  |
| `data_hora`     | date         | Data e hora da sugestão            |

### Tabela: `Destinos`
Esta tabela armazena os destinos para onde os usuários podem viajar.

| Campo           | Tipo         | Descrição                          |
|-----------------|--------------|------------------------------------|
| `id_destino`    | INT          | Identificador único do destino     |
| `nome_destino`  | VARCHAR(100) | Nome do destino                    |
| `descricao`     | TEXT         | Descrição do destino               |
| `clima`         | VARCHAR(50)  | Clima predominante do destino      |
| `pais`          | VARCHAR(50)  | País do destino                    |
| `cidade`        | VARCHAR(50)  | Cidade do destino                  |
---

## 7. Protótipos Visuais
Liste ferramentas ou links de protótipos visuais que mostram como será o layout da aplicação.

- **MODELO AVANÇADO**: https://www.tripadvisor.com.br
- **APP DE ORGANIZAÇÃO**: Packpoint
- **SISTEMA DE GESTÃO**: [Google Maps](https://www.google.com/maps)
- **IMG**: ![Captura de Tela (5)](https://github.com/user-attachments/assets/28d71558-0ac8-4003-a048-6ff1e3a94b72)



---

## 8. Cronograma de Desenvolvimento
- **Fase 1 - Planejamento**: 2 semanas
- **Fase 2 - Desenvolvimento do Frontend**: 6 semanas
- **Fase 3 - Desenvolvimento do Backend**: 6 semanas
- **Fase 4 - Testes**: 3 semanas
- **Fase 5 - Lançamento**: 2 semanas

---

## 9. Equipe do Projeto
- **Desenvolvedor Frontend**: Lucas Florão e Matheus Mattos
- **Desenvolvedor Backend**: Leandro 
- **Designer UI/UX**: Pedro
- **Gerente de Projeto**: Stevão Rodrigues

---

## 10. Referências
- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Node.js](https://nodejs.org/en/docs/)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do MySQL](https://dev.mysql.com/doc/)


---

## 11. Considerações Finais
Inclua aqui qualquer outra informação que seja relevante para o desenvolvimento do projeto, como recomendações de bibliotecas, dicas de otimização ou requisitos futuros.

---

