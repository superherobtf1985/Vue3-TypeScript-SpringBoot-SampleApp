package com.bellshun.book.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bellshun.book.entity.Book;

@Mapper
public interface BookMapper {
    
    List<Book> findAll();
    Book findById(Long id);
    int insert(Book book);
    int delete(Long id);
    int update(Book book);
}
