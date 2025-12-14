package com.sweetshop.controller;

import com.sweetshop.model.Sweet;
import com.sweetshop.service.SweetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sweets")
@CrossOrigin
public class SweetController {

    private final SweetService sweetService;

    public SweetController(SweetService sweetService) {
        this.sweetService = sweetService;
    }

    @PostMapping
    public Sweet addSweet(@RequestBody Sweet sweet) {
        return sweetService.addSweet(sweet);
    }

    @GetMapping
    public List<Sweet> getAll() {
        return sweetService.getAllSweets();
    }

    @PostMapping("/{id}/purchase")
    public Sweet purchase(@PathVariable Long id) {
        return sweetService.purchaseSweet(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        sweetService.deleteSweet(id);
    }

    @PutMapping("/{id}/restock")
    public Sweet restock(@PathVariable Long id,
            @RequestParam int quantity) {
        return sweetService.restockSweet(id, quantity);
    }
}
