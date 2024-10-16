CREATE TABLE IF NOT EXISTS Usuários (
id_usuario	INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(100),	
senha VARCHAR(255),	
data_nasc DATE,
data_hora DATE
)

CREATE TABLE IF NOT EXISTS Atividades(

id_atividade INT PRIMARY KEY AUTO_INCREMENT,
tipo_atividade INT,
descricao TEXT,
endereco VARCHAR(100),
preco DECIMAL(10,2),
data_atividade	DATE
)

CREATE TABLE IF NOT EXISTS Avaliações (
id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,	
id_usuario	INT,
tipo_avaliacao VARCHAR(100),	
avaliacao DECIMAL(2,1),	
comentarios	TEXT,	
data_hora DATE,
FOREIGN KEY(id_usuario) REFERENCES Usuários(id_usuario)
    )

CREATE TABLE IF NOT EXISTS Destinos (
id_destino INT,	
nome_destino VARCHAR(100),	
descricao TEXT,	
clima VARCHAR(50),	
pais VARCHAR(50),	
cidade VARCHAR(50)
    )

CREATE TABLE IF NOT EXISTS Sugestoes (
id_sugestao INT,
id_usuario INT,
id_atividade INT,
descricao TEXT,	
data_hora DATE
    )