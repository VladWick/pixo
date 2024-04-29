package com.vladwick.orderservice.repository;

import com.vladwick.orderservice.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("Select c from Order c where c.orderNumber like %:str%")
    List<Order> findAllByOrderNumberLike(String str);

}
