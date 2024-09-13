	CREATE TABLE IF NOT EXISTS Restaurantes(
        id_restaurante INT PRIMARY KEY AUTO_INCREMENT, 
        nome VARCHAR(100) NOT NULL, 
        endereço VARCHAR(100),
        telefone VARCHAR(11),
        avaliacao VARCHAR(1000)
        )
        
        CREATE TABLE IF NOT EXISTS Atividades(
    id_ativididade INT PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    tipoDeAtividade VARCHAR(100), 
    dataDaAtividade DATE,
    descricao VARCHAR(1000)
    )

        CREATE TABLE IF NOT EXISTS Avaliacoes(
    id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    tipoDeAvaliacao VARCHAR(100),
    localDaAvaliacao VARCHAR(100),
    avaliacao VARCHAR(5),
    comentarios VARCHAR(10000),
    horaDaAvaliacao VARCHAR(5)
    )

    CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE Hoteis (
    id_hotel INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50),
    numero_telefone VARCHAR(11),
    avaliacao TEXT
);

INSERT INTO Usuario (id_usuario,nome, email, senha)
VALUES
    (1,'João Silva', 'joao.silva@example.com', 'senhaSegura123'),
    (2,'Maria Oliveira', 'maria.oliveira@example.com', 'senha1234'),
    (3,'Carlos Souza', 'carlos.souza@example.com', 'senhaC4r10s'),
    (4,'Ana Costa', 'ana.costa@example.com', 'Ana@2024');


INSERT INTO Hoteis (id_hotel,nome, endereco, numero_telefone, avaliacao)
VALUES
    (10,'Hotel Bela Vista', 'Rua das Flores, 123', '11987654321', 'Ótimo hotel com excelente atendimento e localização. Recomendado para famílias e turistas.'),
    (11,'Pousada do Sol', 'Avenida Central, 456', '21987654321', 'Boa pousada com ambiente agradável. O café da manhã poderia ser mais variado.'),
    (12,'Hotel Mar Azul', 'Praia do Mar, 789', '31987654321', 'Localização perfeita com vista para o mar. Ideal para quem gosta de praia e tranquilidade.'),
    (13,'Hotel Jardim das Avenidas', 'Avenida das Avenidas, 321', '41987654321', 'Excelente opção para quem busca conforto e tranquilidade. Próximo a várias atrações turísticas.');


INSERT INTO Avaliacoes (id_avaliacao,id_usuario, tipoDeAvaliacao, localDaAvaliacao, avaliacao, comentarios, horaDaAvaliacao)
VALUES
    (20,1, 'Hotel', 'Hotel Bela Vista', '5', 'Excelente hotel com ótimas instalações e serviço impecável. Recomendo!', '15:30'),
    (21,2, 'Restaurante', 'Restaurante Gourmet', '4', 'Bom restaurante com pratos variados e bom atendimento. O preço é um pouco alto.', '20:00'),
    (22,3, 'Atração Turística', 'Praia do Mar', '5', 'Lugar incrível para relaxar e aproveitar o mar. Muito recomendado!', '10:15'),
    (23,4, 'Pousada', 'Pousada do Sol', '3', 'Pousada confortável, mas o café da manhã poderia ser melhor.', '08:45');


 INSERT INTO Atividades (id_atividade,id_usuario, tipoDeAtividade, dataDaAtividade, descricao)
VALUES
    (1,1, 'Reunião', '2024-09-01', 'Reunião de planejamento com a equipe de marketing. Discutir novas estratégias e campanhas.'),
    (2,2, 'Treinamento', '2024-09-05', 'Treinamento sobre novas ferramentas de análise de dados. Participantes devem estar preparados com perguntas.'),
    (3,3, 'Evento', '2024-09-10', 'Participação no evento anual de tecnologia. Networking e atualização sobre novas tendências.'),
    (4,4, 'Feedback', '2024-09-12', 'Sessão de feedback individual com o gerente para discutir o desempenho e objetivos de carreira.');

    INSERT INTO Restaurantes (id_restaurante,nome, endereco, telefone, avaliacao)
VALUES
    (1,'Restaurante La Bella', 'Rua das Flores, 123, Centro', '11987654321', '4 estrelas'),
    (2,'Cantina do Chef', 'Avenida Central, 456, Sala 12', '21987654321', '5 estrelas'),
    (3,'Bistrô do Porto', 'Praça da Alegria, 789', '31987654321', '3 estrelas'),
    (4,'Pizzaria Bella Itália', 'Rua das Oliveiras, 321', '41987654321', '4 estrelas');

    ALTER TABLE Usuario
ADD data_nasc DATE,
ADD data_hora VARCHAR(5)

ALTER TABLE Atividades
ADD preco DECIMAL(10,2)

ALTER TABLE Restaurantes
ADD culinaria VARCHAR(100),
ADD preco DECIMAL(10,2)

ALTER TABLE Hoteis
ADD preco DECIMAL (10,2),
ADD data_hora VARCHAR(100)

ALTER TABLE Atividades
ADD endereco VARCHAR(100)