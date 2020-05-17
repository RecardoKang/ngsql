package com.cmos.ngsql.web.controller.common;

import java.util.Map;

//import org.springframework.boot.autoconfigure.web.DefaultErrorAttributes;
import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.WebRequest;

@Component
public class CustomErrorAttribute extends DefaultErrorAttributes {

    public static final String CUSTOM_ERROR_MAP_NAME = "customErrorMap";

    public Map<String, Object> getErrorAttributes(WebRequest requestAttributes, boolean includeStackTrace) {
        Map<String, Object> map = super.getErrorAttributes(requestAttributes, includeStackTrace);

        //设置传递自己定义的错误信息
        map.put(CUSTOM_ERROR_MAP_NAME, requestAttributes.getAttribute(CUSTOM_ERROR_MAP_NAME, RequestAttributes.SCOPE_REQUEST));
        return map;
    }

}
