package com.vladwick.inventoryservice.service;

import com.vladwick.inventoryservice.dto.InventoryResponse;
import com.vladwick.inventoryservice.dto.ProductToStockDto;
import com.vladwick.inventoryservice.model.Inventory;
import com.vladwick.inventoryservice.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    @Transactional(readOnly = true)
    @SneakyThrows
    public List<InventoryResponse> isInStock(List<String> skuCode) throws InterruptedException {
        return inventoryRepository.findBySkuCodeIn(skuCode)
                .stream()
                .map(inventory ->
                    InventoryResponse.builder()
                            .skuCode(inventory.getSkuCode())
                            .isInStock(inventory.getQuantity() > 0)
                            .build()
                ).toList();
    }

    public Inventory addToStock(ProductToStockDto productToStock) {
        Inventory inv = new Inventory();
        inv.setQuantity(productToStock.getQuantity());
        inv.setSkuCode(productToStock.getSkuCode());
        return inventoryRepository.save(inv);
    }

    public List<Inventory> getAll() {
        return inventoryRepository.findAll();
    }
}
