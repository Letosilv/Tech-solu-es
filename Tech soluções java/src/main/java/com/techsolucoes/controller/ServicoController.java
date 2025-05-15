package com.techsolucoes.controller;

import com.techsolucoes.model.Servico;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/servicos")
@CrossOrigin(origins = "*")
public class ServicoController {

    @GetMapping
    public List<Servico> listarServicos() {
        return Arrays.asList(
            new Servico(1L, "Criação de Sites", "Sites modernos e responsivos"),
            new Servico(2L, "Manutenção de Ar-Condicionado", "Limpeza e instalação")
        );
    }
}
