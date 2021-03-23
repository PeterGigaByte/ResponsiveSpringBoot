package com.javascript.jav.controllers;

import com.javascript.jav.models.Customer;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/customer")
public class RestWebController {
    List<Customer> cust = new ArrayList<>();

    @GetMapping(value = "/all")
    public List<Customer> getResource(){
        return cust;
    }

    @PostMapping(value="/save")
    public String postCustomer(@RequestBody List<Customer> customers){
        cust.addAll(customers);
        return "Post Successfully!";
    }
}