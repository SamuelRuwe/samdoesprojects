package com.example.mapplicationbackend.services;

import com.example.mapplicationbackend.models.LocationModel;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LocationServiceTest {

    @Test
    void getLocation() {
        WebClient webClient = WebClient.builder()
                .exchangeFunction(clientRequest ->
                        Mono.just(ClientResponse.create(HttpStatus.OK)
                                .header("content-type", "application/json")
                                .body("{\n" +
                                        "  \"ip\": \"8.8.8.8\",\n" +
                                        "  \"hostname\": \"dns.google\",\n" +
                                        "  \"anycast\": true,\n" +
                                        "  \"city\": \"Mountain View\",\n" +
                                        "  \"region\": \"California\",\n" +
                                        "  \"country\": \"US\",\n" +
                                        "  \"loc\": \"37.4056,-122.0775\",\n" +
                                        "  \"org\": \"AS15169 Google LLC\",\n" +
                                        "  \"postal\": \"94043\",\n" +
                                        "  \"timezone\": \"America/Los_Angeles\",\n" +
                                        "  \"readme\": \"https://ipinfo.io/missingauth\"\n" +
                                        "}")
                                .build())
                ).build();

        Mono<LocationModel> locationModelMono = webClient.get().retrieve().bodyToMono(LocationModel.class);
        LocationModel locationModel = locationModelMono.block();
        assertEquals("8.8.8.8", locationModel.getIp());
        assertEquals("37.4056,-122.0775", locationModel.getLoc());
    }

}
