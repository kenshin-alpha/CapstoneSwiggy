package mypkg.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import mypkg.entity.Item;


public class AdminController {
	

		@GetMapping("/prodById/{id}")
		public Item findItemById(@PathVariable int id) {
			return null;
		
		}
		
		@GetMapping("/products")
		public List<Item> findAllItems() {
			return null;
			
		}
		
		@PostMapping("/addProduct")
		public Item addItem(@RequestBody Item p) {
			return null;
		
		}
		
		@DeleteMapping("/delete/{id}")
		public String deleteItem(@PathVariable int id) {
			return null;
			
		}
		
		@PutMapping("/update")
		public Item updateItem(@RequestBody Item Product) {
			return null;
			
		}
}
