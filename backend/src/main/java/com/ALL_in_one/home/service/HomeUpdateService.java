

package com.ALL_in_one.home.service;

import com.ALL_in_one.home.repository.HomeUpdateRepository;
import org.springframework.stereotype.Service;

@Service
public class HomeUpdateService {

    private final HomeUpdateRepository homeUpdateRepository;

    public HomeUpdateService(HomeUpdateRepository homeUpdateRepository) {
        this.homeUpdateRepository = homeUpdateRepository;
    }
}
