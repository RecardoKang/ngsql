package com.cmos.ngsql.web.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        super.configure(http);
//        http.authorizeRequests().anyRequest().permitAll().
//                and().logout().permitAll()
//                .and().csrf().disable();//关闭CSRF保护。
//    }
//}
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests() // 定义哪些URL需要被保护、哪些不需要被保护
                .antMatchers("/src/assets/css/**", "/src/assets/common/jquery.js", "/login").permitAll()// 设置所有人都可以访问登录页面
                .anyRequest().authenticated()  // 任何请求,登录后可以访问
                .and()
                .formLogin().loginPage("/login")
        ;
//        super.configure(http);
//        http.authorizeRequests()
//                .anyRequest()
//                .permitAll().
//                and().logout().permitAll()
//                .and().csrf().disable()//关闭CSRF保护。
//        ;
    }

}
