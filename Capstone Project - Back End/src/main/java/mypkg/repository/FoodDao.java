package mypkg.repository;

import mypkg.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FoodDao extends JpaRepository<Food,String> {

}
