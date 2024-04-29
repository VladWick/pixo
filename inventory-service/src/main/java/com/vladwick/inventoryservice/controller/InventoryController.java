package com.vladwick.inventoryservice.controller;

import com.vladwick.inventoryservice.dto.InventoryResponse;
import com.vladwick.inventoryservice.dto.ProductToStockDto;
import com.vladwick.inventoryservice.model.Inventory;
import com.vladwick.inventoryservice.service.InventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@RequiredArgsConstructor
@Slf4j
public class InventoryController {

    private final InventoryService inventoryService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<InventoryResponse> isInStock(@RequestParam List<String> skuCodes) throws InterruptedException {
        return inventoryService.isInStock(skuCodes);
    }

    @PostMapping("")
    public Inventory addProductToStock(@RequestBody ProductToStockDto productToStockDto) {
        return inventoryService.addToStock(productToStockDto);
    }

    @GetMapping("/list")
    public List<Inventory> getAll() {
        return inventoryService.getAll();
    }

}
