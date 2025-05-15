package com.techsolucoes.model;

public class Contato {
    private String nome;
    private String mensagem;

    public Contato() {}

    public Contato(String nome, String mensagem) {
        this.nome = nome;
        this.mensagem = mensagem;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getMensagem() { return mensagem; }
    public void setMensagem(String mensagem) { this.mensagem = mensagem; }
}
