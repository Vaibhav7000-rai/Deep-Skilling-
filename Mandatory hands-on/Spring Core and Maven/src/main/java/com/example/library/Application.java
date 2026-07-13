package com.example.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Application {
    public static void main(String[] args) {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            BookService bookService = context.getBean("bookService", BookService.class);
            System.out.println("Books in library:");
            for (String book : bookService.getBooks()) {
                System.out.println("- " + book);
            }
        }
    }
}
