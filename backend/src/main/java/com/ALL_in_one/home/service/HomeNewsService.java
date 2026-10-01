package com.ALL_in_one.home.service;

import com.ALL_in_one.home.repository.HomeNewsRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service



public class HomeNewsService {
    @Autowired
    private final HomeNewsRepository homeNewsRepository;

    public HomeNewsService(HomeNewsRepository homeNewsRepository) {
        this.homeNewsRepository = homeNewsRepository;
    }


}