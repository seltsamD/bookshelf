package com.nakhod.service;


import com.nakhod.entity.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}