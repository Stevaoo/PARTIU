import { log } from "console";

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

    publiccriarConta(): void {
        let perguntaNome: string = ask.question('Nome: ')
        let perguntaEmail = ask.question('Email: ')
        let perguntaSenha = ask.question('Senha: ')
        let perguntaConfirmaSenha = ask.question('Confirmar senha: ')
        let perguntaNasc = ask.question('Data de Nascimento: ')

        if (perguntaSenha === perguntaConfirmaSenha || perguntaNasc >= 18) {
            armazenamentoGeral.push(perguntaNome, perguntaEmail, perguntaSenha)
        }
    }

    public removerConta(): void { }
    public redefinirSenha(): void { };

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
    public getIdAtividade(): number{
        return this.id_atividade
    }
    public setIdAtividade(id_atividade: number): void{
        this.id_atividade = id_atividade;
    } 
    public getTipoAtividade(): string{
        return this.tipo_atividade;
    }
    public setTipoAtividade(tipo_atividade: string): void{
        this.tipo_atividade = tipo_atividade;
    }
    public getDescricao(): string{
        return this.descricao;
    }
    public setDescricao(descricao: string): void{
        this.descricao = descricao;
    }
    public getEndereco(): string{
        return this.endereco;
    }
    public setEndereco(endereco: string): void{
        this.endereco = endereco;
    }
    public getPreco(): number{
        return this.preco;
    }
    public setPreco(preco: number): void{
        this.preco = preco;
    } 
    public getDataAtividade(): string{
        return this.data_atividade;
    }
    public setDataAtividade(data_atiividade: string): void{
        this.data_atividade = data_atiividade;
    }
    public vizualizarAvaliacoes(): void {}
    public avaliar(): void {}
}

export class Restaurante {
    private id_restaurante: number;
    public nomeRestaurante: string;
    public culinaria: string;
    public endereco: string;
    public preco_faixa: number;
    public avaliacao: number;
    public telefone: string;
    protected armazenaRestaurante: []
    protected nome: any;

    constructor(id_restaurante: number, nome: string, culinaria: string, endereco: string, preco_faixa: number, avaliacao: number, telefone: string) {
        this.id_restaurante = id_restaurante;
        this.nomeRestaurante = nome;
        this.culinaria = culinaria;
        this.endereco = endereco;
        this.preco_faixa = preco_faixa;
        this.avaliacao = avaliacao;
        this.telefone = telefone;
    }

    public getIdRestaurante(): number {
        return this.id_restaurante
    }
    public setIdRestaurante(id_restaurante: number): void {
        this.id_restaurante = id_restaurante;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome
    }
    public getCulinaria(): string {
        return this.culinaria;
    }
    public setCulinaria(culinaria: string): void {
        this.culinaria = culinaria;
    }
    public getEndereco(): string {
        return this.endereco
    }
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }
    public getPrecoFaixa(): number {
        return this.preco_faixa;
    }
    public setPrecoFaixa(preco_faixa: number): void {
        this.preco_faixa = preco_faixa
    }
    public getAvaliacao(): number {
        return this.avaliacao
    }
    public setAvalicao(avaliacao: number): void {
        this.avaliacao = avaliacao;
    }
    public getTelefone(): string {
        return this.telefone;
    }
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    public pesquisarRestaurante(nomeRestaurante: string): boolean {
        if (this.nome.toLowerCase() === nomeRestaurante.toLowerCase()) {
            console.log(`Restaurante encontrado: ${this.nome}`);
            return true;
        }
        console.log(`Restaurante ${nomeRestaurante} não encontrado.`);
        return false;
    }

    public verCardapio(): void {
        //Exemplo de dados inseridos dentro do DATABESE
        console.log(`Cardápio do restaurante ${this.nome}:`);
        console.log("- Prato 1: R$30");
        console.log("- Prato 2: R$45");
        console.log("- Sobremesa: R$20");
    }

    public buscarPromocoes(): void {
        console.log(`Promoções no restaurante ${this.nome}:`);
        console.log("Refrigerantes FREE nas quintas-feiras.");
    }

    public filtrarPrecos(precoMaximo: number): boolean {
        if (this.preco_faixa <= precoMaximo) {
            console.log(`Restaurante ${this.nome} está dentro da faixa de preço: R$${this.preco_faixa}`);
            return true;
        }
        console.log(`Restaurante ${this.nome} está fora da faixa de preço. Faixa: R$${this.preco_faixa}`);
        return false;
    }

    public buscarCulinaria(culinariaBuscada: string): boolean {
        if (this.culinaria.toLowerCase() === culinariaBuscada.toLowerCase()) {
            console.log(`Restaurante ${this.nome} oferece culinária ${this.culinaria}`);
            return true;
        }
        console.log(`Restaurante ${this.nome} não oferece culinária ${culinariaBuscada}.`);
        return false;
    }
    public visualizarRestaurantes(): void {
        console.log(`
        Restaurante ID: ${this.id_restaurante}
        Nome Restaurante: ${this.nome}
        Culinarias: ${this.culinaria}
        Endereço: ${this.endereco}
        Preço De Faixa: ${this.preco_faixa}
        Avaliação: ${this.avaliacao}
        Telefone; ${this.telefone}
        `);
    }
}

export class Hoteis {
    private id_hotel: number;
    public nome: string;
    public endereco: string;
    public avaliacao: string;
    public preco: number;
    public data_hora: string
    public armazenaHotel: []

    constructor(id_hotel: number, nome: string, endereco: string, avaliacao: string, preco: number, data_hora: string) {
        this.id_hotel = id_hotel;
        this.nome = nome;
        this.endereco = endereco;
        this.avaliacao = avaliacao;
        this.preco = preco;
        this.data_hora = data_hora;
    }
    public vizualizarHotel(): void {}
    public buscarHotel(): void {}
    public reservarQuarto(): void {}
}

export class Avaliacao {
    private id_avaliacao: number;
    private usuario: Usuario;
    public tipo_avaliacao: string;
    public avaliacao: string;
    public comentarios: string;
    public data_hora: number;

    constructor(id_avaliacao: number, usuario: Usuario, tipo_avaliacao: string, avaliacao: string, comentarios: string, data_hora: number) {
        this.id_avaliacao = id_avaliacao;
        this.usuario = usuario;
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
        return this.usuario;
    }

    public setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
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
        return `Avaliação ID: ${this.id_avaliacao}\nUsuário: ${this.usuario}\nTipo de Avaliação: ${this.tipo_avaliacao}\nAvaliação: ${this.avaliacao}\nComentários: ${this.comentarios}\nData/Hora: ${this.data_hora}`;
    }

    public validarAvaliacao(): boolean {
        if (this.avaliacao.length > 0 && this.data_hora > 0) {
            return true;
        }
        return false;
    }
}
