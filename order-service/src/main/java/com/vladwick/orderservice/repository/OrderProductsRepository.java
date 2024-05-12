package com.vladwick.orderservice.repository;

import com.vladwick.orderservice.model.OrderProductsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderProductsRepository extends JpaRepository<OrderProductsModel, Long> {

    List<OrderProductsModel> getAllByOrderId(Long orderId);

}
