package com.example.mapplicationbackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class LocationModel {

    private String ip;
    private String loc;

}
