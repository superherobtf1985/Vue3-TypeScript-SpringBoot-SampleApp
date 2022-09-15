package com.bellshun.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bellshun.book.entity.Book;
import com.bellshun.book.service.BookService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookController {

    @Autowired
    private BookService bookService;
    
    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @GetMapping("/books/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getBook(id);
    }

    @PostMapping("/books")
    public Boolean CreateBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }

    @DeleteMapping("/books/{id}")
    public Boolean DeleteBook(@PathVariable Long id) {
        return bookService.deleteBook(id);
    }

    @PutMapping("/books")
    public Boolean UpdateBook(@RequestBody Book book) {
        return bookService.updateBook(book);
    }
}
