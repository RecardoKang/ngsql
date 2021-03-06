package com.cmos.ngsql.web.config;

import com.cmos.ngsql.web.interceptor.PrivateParamInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.servlet.config.annotation.*;


//@EnableWebMvc
//@ComponentScan(
//        basePackages = {
//                "com.cmos.ngsql.web",
//                "com.cmos.ngsql.web.controller.**"
//        },
//        excludeFilters = {@ComponentScan.Filter(type = FilterType.ANNOTATION, value = EnableWebMvc.class)}
//)
@Configuration
public class WebConfig implements WebMvcConfigurer {

    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/public/**").addResourceLocations("classpath:/public/");
    }

    public void addInterceptors(InterceptorRegistry registry) {
        // addPathPatterns 用于添加拦截规则
        // excludePathPatterns 用户排除拦截
//                registry.addInterceptor(new PrivateParamInterceptor()).addPathPatterns("/**").excludePathPatterns("/src/assets/css/**");
    }


}

