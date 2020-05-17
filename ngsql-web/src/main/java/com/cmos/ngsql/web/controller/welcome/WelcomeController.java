package com.cmos.ngsql.web.controller.welcome;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;


@RestController
@RequestMapping("/welcome")
public class WelcomeController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView welcome() {
        return new ModelAndView("welcome");
    }

    @RequestMapping(value = "/test/ajax")
    @ResponseBody
    public Map<String, Object> testAjax(@RequestParam(required = false) @RequestBody Map<String, Object> test) throws Exception {
        test.put("beans", "测试成功，输入的字符串为：" + test);
        return test;
    }
}
