package mypkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypkg.entity.Cart;

public interface CartDao extends JpaRepository<Cart,Integer> {

}

