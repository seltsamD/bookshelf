package com.nakhod.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainUIController {

    @GetMapping({"/", "/index"})
    public String init() {
        return "index";
    }

    @GetMapping("/author")
    public String author() {
        return "author";
    }

    @GetMapping("/genre")
    public String genre() {
        return "genre";
    }

    @GetMapping("/book")
    public String book() {
        return "book";
    }

}
