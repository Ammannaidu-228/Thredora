package com.threadora.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.threadora.admin.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
