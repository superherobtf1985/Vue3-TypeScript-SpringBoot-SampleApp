import http from "@/common/http-common";

class BookApiService {
  getAll(): Promise<any> {
    return http.get("/api/books");
  }

  get(id: string): Promise<any> {
    return http.get(`/api/books/${id}`);
  }

  create(book: any): Promise<any> {
    return http.post("/api/books", book);
  }

  update(book: any): Promise<any> {
    return http.put(`/api/books/${book.id}`, book);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/api/books/${id}`);
  }
}

export default new BookApiService();