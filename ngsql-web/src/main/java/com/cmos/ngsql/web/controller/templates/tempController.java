package com.cmos.ngsql.web.controller.templates;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("")
public class tempController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView welcome() {
        System.out.println("startPage is here!");
        return new ModelAndView("welcome");
    }

    @RequestMapping(value = "/welcome", method = RequestMethod.GET)
    public ModelAndView tes() {
        return new ModelAndView("src/static/home/welcome.html");
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login() {
        return new ModelAndView("login");
    }

    @RequestMapping(value = "/start", method = RequestMethod.GET)
    public ModelAndView start() {
        return new ModelAndView("start");
    }


}
