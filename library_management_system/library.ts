import { newBook } from "./utils";

class Book {
    public title: string;
    public author: string;
    private id: number;
    private available: boolean;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.available = true;
        this.id = Math.floor(Math.random() * 1000);
    }

    getId(): number {
        return this.id;
    }

    isAvailable(): boolean {
        console.log(`${this.title} is ${this.available ? 'available' : 'not available'}`);
        return this.available
    }

    borrow(): boolean {
        if (this.available) {
            this.available = false
            console.log(`${this.title} borrowed sucessfully`);

            return true
        }
        console.log(`${this.title} not available! try again later.`);
        return false
    }

    returnBook(): void {
        if (!this.available) {
            this.available = true
            console.log(`${this.title} returned sucessfully`);
        } else {
            console.log(`Error: ${this.title} already returned`);
        }

    }

}

class Library {
    // centralized book management
    private books: Book[];
    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book)
    }

    listBooks(): Book[] {
        return this.books
    }

    borrowBook(bookId: number): Book | null {
        const book = this.books.find((book) => book.getId() === bookId);
        if (book && book.isAvailable()) {
            book.borrow()
            return book
        } else {
            return null
        }
    }
}




class User {
    // user should be able to access books
    // borrow book
    // list all books
    public name: string;
    public email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    viewBooks(library: Library) {
        const books = library.listBooks()
        books.forEach((book) => {
            console.log(`${book.getId()}: ${book.title} by ${book.author}`);
        })
    }

    viewBookByTitle(library: Library, title: string) {
        const book = library.listBooks().find((book) => book.title === title);
        if (book) {
            console.log(`${book.title} by ${book.author}`);
        } else {
            console.log(`Error: Book not found`);
        }
    }

    borrowBook(library: Library, bookId: number) {
        const book = library.borrowBook(bookId);
        if (book) {
            console.log(`${book.title} borrowed successfully`);
        } else {
            console.log(`Error: Book not available`);

        }
    }

}
class Admin extends User {
    // admin should be able to create books and add them to library
    // admin should be able to delete and update books. later sha 
    private books: Book[] | undefined;
    public admin: boolean;
    constructor(name: string, email: string) {
        super(name, email);
        this.admin = true;
    }

    createBook(bookData: newBook) {
        return new Book(bookData.title, bookData.author);
    }

    addToLibrary(library: Library, bookData: newBook) {
        const book = this.createBook(bookData);
        library.addBook(book);
    }

}

export { Library, User, Admin }