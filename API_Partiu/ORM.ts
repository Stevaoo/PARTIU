export class Usuario {
    private id_usuario: number;
    private nome: string;
    public email: string;
    private senha: number;
    public data_nasc: string;
    public data_hora: string;

    constructor(id_usuario: number, nome: string, email: string, senha: number, data_nasc: string, data_hora: string){
        this.id_usuario = id_usuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.data_nasc = data_nasc;
        this.data_hora = data_hora;
    }
}

export class Atividades {
    private id_atividade: number;
    public tipo_atividade: string;
    public descricao: string;
    public endereco: string;
    public preco: number;
    public data_atividade: string;

    constructor(id_atividade: number, tipo_atividade: string, descricao: string, endereco: string, preco: number, data_atiividade: string) {
        this.id_atividade = id_atividade;
        this.tipo_atividade = tipo_atividade;
        this.descricao = descricao;
        this.endereco = endereco;
        this.preco = preco;
        this.data_atividade = data_atiividade;
    }
}

export class Restaurante {
    private id_restaurante: number;
    public nome: string;
    public culinaria: string;
    public endereco: string;
    public preco_faixa: number;
    public avaliacao: number;
    public telefone: string;

    constructor(id_restaurante: number, nome: string, culinaria: string, endereco: string, preco_faixa: number, avaliacao: number, telefone: string){
        this.id_restaurante = id_restaurante;
        this.nome = nome;
        this.culinaria = culinaria;
        this.endereco = endereco;
        this.preco_faixa = preco_faixa;
        this.avaliacao = avaliacao;
        this.telefone = telefone;
    }
}
