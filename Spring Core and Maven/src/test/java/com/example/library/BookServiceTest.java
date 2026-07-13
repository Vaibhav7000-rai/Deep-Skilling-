package com.example.library;

import org.junit.jupiter.api.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class BookServiceTest {

    @Test
    void shouldLoadBookServiceFromSpringContext() {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            BookService bookService = context.getBean("bookService", BookService.class);
            assertNotNull(bookService);
            assertEquals(3, bookService.getBooks().size());
        }
    }
}
