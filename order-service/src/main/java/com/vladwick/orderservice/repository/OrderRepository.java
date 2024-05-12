package com.vladwick.orderservice.repository;

import com.vladwick.orderservice.model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {

//    @Query("Select c from Order c where c.orderNumber like %:str%")
//    List<Order> findAllByOrderNumberLike(String str);

    List<OrderModel> getAllByUserId(String userId);

}
