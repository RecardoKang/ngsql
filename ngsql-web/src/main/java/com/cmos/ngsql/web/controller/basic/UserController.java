package com.cmos.ngsql.web.controller.basic;

import com.cmos.ngsql.beans.common.UserInfo;
import com.cmos.ngsql.iservice.basic.IGetUserInfoSV;
import org.codehaus.groovy.util.Reference;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IGetUserInfoSV iGetUserInfoSV;

    @RequestMapping("/login")
    public UserInfo getUserInfoSession(@RequestParam("name") String name, @RequestParam("password") String passWord) {
        UserInfo userInfo = new UserInfo();
        String result = iGetUserInfoSV.checkUserLogin(name, passWord);
        return userInfo;
    }
}
