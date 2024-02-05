package com.tetheugas;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;

import com.tetheugas.model.Plant;
import com.tetheugas.repository.PlantRepository;

@EntityScan(basePackages = "com.tetheugas.model")
@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDatabase(PlantRepository plantRepository){
		return args -> {
			plantRepository.deleteAll();

			Plant p = new Plant();
			p.setName("Espada");
			p.setCategory("Easy");

			plantRepository.save(p);
		};
	}
}
