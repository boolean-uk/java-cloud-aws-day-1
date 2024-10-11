package com.booleanuk.TodoApp.controllers;

import com.booleanuk.TodoApp.models.Todo;
import com.booleanuk.TodoApp.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("")
public class HomeController {


    @GetMapping
    public ResponseEntity<String> get(){
        return ResponseEntity.ok("Please navigate to the todos endpoint.");
    }


}