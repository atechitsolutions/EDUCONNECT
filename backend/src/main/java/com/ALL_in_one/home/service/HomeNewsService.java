package com.ALL_in_one.home.service;

import com.ALL_in_one.home.repository.HomeNewsRepository;
import com.ALL_in_one.home.dto.HomeNewsRequest;
import com.ALL_in_one.home.dto.HomeNewsResponse;
import com.ALL_in_one.home.entity.HomeNews;
import com.ALL_in_one.home.exception.HomeResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeNewsService {
    private final HomeNewsRepository repository;

    public HomeNewsService(HomeNewsRepository repository) {
        this.repository = repository;
    }

    public List<HomeNewsResponse> getPublishedNews() {
        return repository.findByPublishedTrueOrderByCreatedAtDesc()
                .stream().map(this::toResponse).toList();
    }

    public HomeNewsResponse getPublishedNewsById(Long id) {
        HomeNews news = repository.findById(id)
                .filter(HomeNews::isPublished)
                .orElseThrow(() -> new HomeResourceNotFoundException("Published news not found: " + id));
        return toResponse(news);
    }

    public List<HomeNewsResponse> getAllNews() {
        return repository.findAllByOrderByCreatedAtDesc()
                .stream().map(this::toResponse).toList();
    }

    public HomeNewsResponse create(HomeNewsRequest request) {
        return toResponse(repository.save(apply(new HomeNews(), request)));
    }

    public HomeNewsResponse update(Long id, HomeNewsRequest request) {
        HomeNews news = repository.findById(id)
                .orElseThrow(() -> new HomeResourceNotFoundException("News not found: " + id));
        return toResponse(repository.save(apply(news, request)));
    }

    public void delete(Long id) {
        HomeNews news = repository.findById(id)
                .orElseThrow(() -> new HomeResourceNotFoundException("News not found: " + id));
        repository.delete(news);
    }

    private HomeNews apply(HomeNews news, HomeNewsRequest request) {
        news.setTitle(request.title().trim());
        news.setSubtitle(request.subtitle());
        news.setDescription(request.description().trim());
        news.setCategory(request.category().trim());
        news.setCountry(request.country());
        news.setImageUrl(request.imageUrl());
        news.setSourceUrl(request.sourceUrl());
        news.setPublished(request.published());
        return news;
    }

    private HomeNewsResponse toResponse(HomeNews news) {
        return new HomeNewsResponse(news.getId(), news.getTitle(), news.getSubtitle(),
                news.getDescription(), news.getCategory(), news.getCountry(),
                news.getImageUrl(), news.getSourceUrl(), news.isPublished(),
                news.getCreatedAt(), news.getUpdatedAt());
    }
}
