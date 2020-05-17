package com.cmos.ngsql.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(
        scanBasePackages =
                "com.cmos.ngsql.web.**"
)
public class WebApplication extends SpringBootServletInitializer{

        protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
            return application.sources(WebApplication.class);//你的项目启动类名
        }

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

}
