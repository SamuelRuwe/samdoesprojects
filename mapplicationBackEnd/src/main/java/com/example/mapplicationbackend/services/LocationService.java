package com.example.mapplicationbackend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

@Service
public class LocationService {

    private final WebClient webClient;

    public LocationService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://ipinfo.io").build();
    }

    public String getLocation(String ip) {
        URL url = createURL(ip);
        return retrieveLocationData(url);
    }

    private URL createURL(String ip) {
        String urlStr = String.format("https://ipinfo.io/%s/json", ip);
        try {
            return new URL(urlStr);
        } catch (MalformedURLException e) {
            System.out.println("Invalid IP address given");
            return null;
        }
    }

    private String retrieveLocationData(URL url) {
        String input;
        StringBuilder response = new StringBuilder();
        try {
            URLConnection conn = url.openConnection();
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            while ((input = br.readLine()) != null) response.append(input);
            br.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return response.toString();
    }
}
