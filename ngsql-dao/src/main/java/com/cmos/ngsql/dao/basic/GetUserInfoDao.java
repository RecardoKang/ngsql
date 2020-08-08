package com.cmos.ngsql.dao.basic;

import java.util.Map;

public interface GetUserInfoDao {
    Map<String,String> getUserInfo(String userName,String passWord);
}
