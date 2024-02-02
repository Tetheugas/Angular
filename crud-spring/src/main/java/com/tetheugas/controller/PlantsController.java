package com.tetheugas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tetheugas.model.Plant;
import com.tetheugas.repository.PlantRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/plants")
@AllArgsConstructor
public class PlantsController {

    @Autowired
    private final PlantRepository plantRepository;

    @GetMapping
    public List<Plant> list(){
        return plantRepository.findAll();
    }

    
}
