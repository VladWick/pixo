package com.vladwick.inventoryservice;

import com.vladwick.inventoryservice.model.Inventory;
import com.vladwick.inventoryservice.repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadData(InventoryRepository inventoryRepository) {
		return args -> {
			Inventory inventory1 = new Inventory();
			inventory1.setSkuCode("iphone-13");
			inventory1.setQuantity(123L);

			Inventory inventory2 = new Inventory();
			inventory2.setSkuCode("example");
			inventory2.setQuantity(0L);

			inventoryRepository.save(inventory1);
			inventoryRepository.save(inventory2);
		};
	}


}
