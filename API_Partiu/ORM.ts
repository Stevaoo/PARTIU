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
    id_atividade: number;
    nome: string;
}