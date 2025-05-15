package com.techsolucoes.controller;

import com.techsolucoes.model.Contato;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contatos")
@CrossOrigin(origins = "*")
public class ContatoController {

    @PostMapping
    public ResponseEntity<String> receberContato(@RequestBody Contato contato) {
        System.out.printf("Novo contato: %s → %s%n", contato.getNome(), contato.getMensagem());
        return ResponseEntity.ok("Contato recebido com sucesso!");
    }
}
