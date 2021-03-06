package com.example.mapplicationbackend.controllers;

import com.example.mapplicationbackend.models.LocationModel;
import com.example.mapplicationbackend.services.LocationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class MapController {

    private final LocationService locationService;

    public MapController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("/")
    public Mono<LocationModel> getLocation() {
        return this.locationService.getLocation("8.8.8.8");
    }

}
