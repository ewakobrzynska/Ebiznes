package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] voids) {
        SpringApplication.run(BackendApplication.class, voids);
    }

    @RestController
    class HelloController {
        @GetMapping("/hello")
        public String hello() {
            return "Hello from Backend!";
        }
    }
}