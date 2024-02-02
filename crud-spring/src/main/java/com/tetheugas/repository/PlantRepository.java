package com.tetheugas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tetheugas.model.Plant;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long>{


}
