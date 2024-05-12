package com.vladwick.orderservice.service;

import com.vladwick.orderservice.model.OrderProductsModel;
import com.vladwick.orderservice.repository.OrderProductsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderProductsService {

    private final OrderProductsRepository orderProductsRepository;

    public OrderProductsModel save(OrderProductsModel model) {
        return orderProductsRepository.save(model);
    }

    public List<OrderProductsModel> getAllByOrderId(Long orderId) {
        return orderProductsRepository.getAllByOrderId(orderId);
    }

}
