// Object-Relational Mapping = Mapeamento Objeto-Relacional
export let ask = require('readline-sync')

export let armazenamentoGeral: any = []

export class Usuario {
    private id_usuario: number;
    private nome: string;
    public email: string;
    private senha: number;
    public data_nasc: string;
    public data_hora: string;
    protected armazenaUser: []

    constructor(id_usuario: number, nome: string, email: string, senha: number, data_nasc: string, data_hora: string) {
        this.id_usuario = id_usuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.data_nasc = data_nasc;
        this.data_hora = data_hora;
        this.armazenaUser = []
    }
    public entrarConta(): void {
        let nome = ask.question("Insira o Nome do Titular da conta: ")
        let senha = ask.questionInt("Insira a Senha da conta:  ")
        if (nome === armazenamentoGeral && senha === armazenamentoGeral) {
            console.log("Entrando na conta...");
        } else if (nome === armazenamentoGeral && senha !== armazenamentoGeral) {
            console.log("Senha Incorreta!!!");
        } else if (nome !== armazenamentoGeral && senha === armazenamentoGeral) {
            console.log("Nome Incorreto!!!");
        } else {
            console.log("Nome ou Senha Incorreto!");
        }
    }

    public criarConta(): void {
        let perguntaNome: string = ask.question('Nome: ')
        let perguntaEmail = ask.question('Email: ')
        let perguntaSenha = ask.question('Senha: ')
        let perguntaConfirmaSenha = ask.question('Confirmar senha: ')
        let perguntaNasc = ask.question('Data de Nascimento: ')

        if (perguntaSenha === perguntaConfirmaSenha || perguntaNasc >= 18) {
            armazenamentoGeral.push(perguntaNome, perguntaEmail, perguntaSenha)
        }
    }

    public removerConta(): void {
        let nome = ask.question("Insira o Nome do Titular da conta que deseja remover: ");
        let senha = ask.question("Insira a Senha da conta: ");
    
        let usuarioIndex = -1; // Inicializa o índice como -1
    
        // Para encontrar o índice do usuário
        for (let i = 0; i < this.armazenaUser.length; i++) {
            if (this.armazenaUser[i].nome === nome && this.armazenaUser[i].senha === senha) {
                usuarioIndex = i; // Armazena o índice
                break; // Encerra o loop se encontrar o usuário
            }
        }
    
        if (usuarioIndex !== -1) {
            this.armazenaUser.splice(usuarioIndex, 1);
            console.log("Conta removida com sucesso!");
        } else {
            console.log("Nome ou Senha incorretos! Verifique se estão corretos e tente novamente.");
        }
    }
    

    public redefinirSenha(): void {
        let nome = ask.question("Insira o Nome do Titular da conta: ");
        let senhaAntiga = ask.question("Insira a Senha Antiga: ");
        let novaSenha = ask.question("Insira a Nova Senha: ");
        let confirmaNovaSenha = ask.question("Confirme a Nova Senha: ");
    
        const usuario = this.armazenaUser.find(user => user.nome === nome);
    
        if (usuario) {
            if (usuario.senha === senhaAntiga) {
                if (novaSenha === confirmaNovaSenha) {
                    usuario.senha = novaSenha; // Atualiza a senha
                    console.log("Senha redefinida com sucesso!");
                } else {
                    console.log("As novas senhas não coincidem. Tente novamente.");
                }
            } else {
                console.log("Senha antiga incorreta!");
            }
        } else {
            console.log("Usuário não encontrado!");
        }
    }
    

}

export class Atividades {
    private id_atividade: number;
    public tipo_atividade: string;
    public descricao: string;
    public endereco: string;
    public preco: number;
    public data_atividade: string;
    protected armazenaAtividades: []
    constructor(id_atividade: number, tipo_atividade: string, descricao: string, endereco: string, preco: number, data_atiividade: string) {
        this.id_atividade = id_atividade;
        this.tipo_atividade = tipo_atividade;
        this.descricao = descricao;
        this.endereco = endereco;
        this.preco = preco;
        this.data_atividade = data_atiividade;
    }
    public getIdAtividade(): number {
        return this.id_atividade
    }
    public setIdAtividade(id_atividade: number): void {
        this.id_atividade = id_atividade;
    }
    public getTipoAtividade(): string {
        return this.tipo_atividade;
    }
    public setTipoAtividade(tipo_atividade: string): void {
        this.tipo_atividade = tipo_atividade;
    }
    public getDescricao(): string {
        return this.descricao;
    }
    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
    public getEndereco(): string {
        return this.endereco;
    }
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }
    public getPreco(): number {
        return this.preco;
    }
    public setPreco(preco: number): void {
        this.preco = preco;
    }
    public getDataAtividade(): string {
        return this.data_atividade;
    }
    public setDataAtividade(data_atiividade: string): void {
        this.data_atividade = data_atiividade;
    }
    public vizualizarAvaliacoes(): void { }
    public avaliar(): void { }
}

export class Avaliacao {
    private id_avaliacao: number;
    private id_usuario: Usuario;
    public tipo_avaliacao: string;
    public avaliacao: string;
    public comentarios: string;
    public data_hora: number;

    constructor(id_avaliacao: number, usuario: Usuario, tipo_avaliacao: string, avaliacao: string, comentarios: string, data_hora: number) {
        this.id_avaliacao = id_avaliacao;
        this.id_usuario = usuario;
        this.tipo_avaliacao = tipo_avaliacao;
        this.avaliacao = avaliacao;
        this.comentarios = comentarios;
        this.data_hora = data_hora;
    }

    public getIdAvaliacao(): number {
        return this.id_avaliacao;
    }

    public setIdAvaliacao(id_avaliacao: number): void {
        this.id_avaliacao = id_avaliacao;
    }

    public getUsuario(): Usuario {
        return this.id_usuario;
    }

    public setUsuario(usuario: Usuario): void {
        this.id_usuario = usuario;
    }

    public getTipoAvaliacao(): string {
        return this.tipo_avaliacao;
    }

    public setTipoAvaliacao(tipo_avaliacao: string): void {
        this.tipo_avaliacao = tipo_avaliacao;
    }

    public getAvaliacao(): string {
        return this.avaliacao;
    }

    public setAvaliacao(avaliacao: string): void {
        this.avaliacao = avaliacao;
    }

    public getComentarios(): string {
        return this.comentarios;
    }

    public setComentarios(comentarios: string): void {
        this.comentarios = comentarios;
    }

    public getDataHora(): number {
        return this.data_hora;
    }

    public setDataHora(data_hora: number): void {
        this.data_hora = data_hora;
    }

    public exibirDetalhes(): string {
        return `Avaliação ID: ${this.id_avaliacao}\nUsuário: ${this.id_usuario}\nTipo de Avaliação: ${this.tipo_avaliacao}\nAvaliação: ${this.avaliacao}\nComentários: ${this.comentarios}\nData/Hora: ${this.data_hora}`;
    }

    public validarAvaliacao(): boolean {
        if (this.avaliacao.length > 0 && this.data_hora > 0) {
            return true;
        }
        return false;
    }
}
