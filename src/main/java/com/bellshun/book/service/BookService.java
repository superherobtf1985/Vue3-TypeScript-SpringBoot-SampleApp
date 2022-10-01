package com.bellshun.book.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bellshun.book.entity.Book;
import com.bellshun.book.mapper.BookMapper;

@Service
public class BookService {
    
    @Autowired
    private BookMapper bookMapper;

    public List<Book> getBooks() {
        return bookMapper.findAll();
    }

    public Book getBook(Long id) {
        return bookMapper.findById(id);
    }

    public Boolean createBook(Book book) {
        return bookMapper.insert(book) == 1;
    }

    public Boolean deleteBook(Long id) {
        return bookMapper.delete(id) == 1;
    }

    public Boolean updateBook(Book book) {
        return bookMapper.update(book) == 1;
    }
}
