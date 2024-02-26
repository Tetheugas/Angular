package com.tetheugas.controller;

import java.util.List;

import com.tetheugas.model.Plant;
import com.tetheugas.repository.PlantRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


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

    @PostMapping()
    public void create(@RequestBody Plant plant) {
        System.out.println(plant.getName());

    }

}
