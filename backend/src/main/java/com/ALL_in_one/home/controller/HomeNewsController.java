
package com.ALL_in_one.home.controller;

import com.ALL_in_one.home.entity.HomeNews;
import com.ALL_in_one.home.service.HomeNewsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/home/news")
public class HomeNewsController {

    private final HomeNewsService homeNewsService;

    public HomeNewsController(HomeNewsService homeNewsService) {
        this.homeNewsService = homeNewsService;
    }

    @GetMapping
    public List<HomeNews> getAllNews() {
        return homeNewsService.getAllNews();
    }
}
