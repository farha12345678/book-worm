import { useEffect, useState } from "react";
import { getBooks } from "../../../Utility/localstorage";
import BookCard from "../../Books/BookCard";

const ReadBooks = () => {
    const [book, setBooks] = useState([])


    useEffect(() => {
        const storedBooks = getBooks()
        setBooks(storedBooks)

    }, [])
    return (
        <div className="grid md:grid-cols-3 gap-y-10">
            {
                book.map((book) => <BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
    );
};

export default ReadBooks;