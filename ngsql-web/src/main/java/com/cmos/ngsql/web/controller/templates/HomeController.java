package com.cmos.ngsql.web.controller.templates;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {


    @GetMapping("/login")
    public String login() {
        return "index";
    }

}