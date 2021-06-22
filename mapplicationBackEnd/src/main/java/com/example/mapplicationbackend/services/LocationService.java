package com.example.mapplicationbackend.services;

import com.example.mapplicationbackend.models.LocationModel;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class LocationService {

    private final WebClient webClient;

    public LocationService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://ipinfo.io").build();
    }

    public Mono<LocationModel> getLocation(String ip) {
        return this.webClient.get().uri("{ip}/json", ip)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve().bodyToMono(LocationModel.class)
                .onErrorResume(e -> Mono.error(new Exception("error processing request")));
    }

}
