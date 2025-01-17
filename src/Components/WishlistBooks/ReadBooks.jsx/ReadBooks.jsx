import { useEffect, useState } from "react";
import { getAddedBooks } from "../../../Utility/localstorage";
import ReadCard from "../../ReadBooks/ReadCard";
import { useLoaderData } from "react-router-dom";


const ReadBooks = () => {
    const [book, setBooks] = useState([])
    const [displayBook, setDisplayBook] = useState([])

    const handleBooks = (filter) => {
        if (filter === 'all') {
            setDisplayBook(book)
        } else if (filter === 'fiction') {
            const filterBook = book.filter(book => book.category === 'Fiction');
            setDisplayBook(filterBook)
        } else if (filter === 'fantasy') {
            const fantasyBook = book.filter(book => book.category === 'Fantasy');
            setDisplayBook(fantasyBook)
        }
    }
    const books = useLoaderData()

    useEffect(() => {
        const storedBookId = getAddedBooks()
        if (books.length > 0) {
            const storedBooks = books.filter((book) => storedBookId.includes(book.bookId));
            setBooks(storedBooks)
            setDisplayBook(storedBooks)
        } 
    }, [books])

    return (
        <div>
            <div className="dropdown text-center flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-white">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleBooks('all')}><a>All</a></li>
                    <li onClick={() => handleBooks('fiction')}><a>Fiction</a></li>
                    <li onClick={() => handleBooks('fantasy')}><a>Fantasy</a></li>
                </ul>
            </div>
            <div className="h-[400px]">
                {
                    displayBook.map((book) => <ReadCard key={book.bookId} book={book}></ReadCard>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;