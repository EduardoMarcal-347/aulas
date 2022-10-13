package com.eduardo.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.eduardo.demo.model.Pessoa;

@Controller
public class HomeController {

    @GetMapping("home")
    public String home(Model model){
        Pessoa pessoa = new Pessoa();
        pessoa.setNome("eduardo");
        pessoa.setSobrenome("Marçal");
        System.out.println(pessoa.getNome()+" "+pessoa.getSobrenome());
        model.addAttribute("p", pessoa);
        return "index";
    }
    
}
