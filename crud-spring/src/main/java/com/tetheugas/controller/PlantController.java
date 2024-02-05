package com.tetheugas.controller;

import java.util.List;

import com.tetheugas.model.Plant;
import com.tetheugas.repository.PlantRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/plants")
@AllArgsConstructor
public class PlantController {

    private final PlantRepository plantRepository;

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Plant> list() {
        return plantRepository.findAll();
    }

}
