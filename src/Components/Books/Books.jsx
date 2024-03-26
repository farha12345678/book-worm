
import {useEffect , useState } from "react";
import BookCard from "./BookCard";

const Books = () => {

    const [books , setBooks] = useState([])


 useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setBooks(data))
} ,[])



    return (
        <div>
            <div className="text-5xl font-bold text-center my-20">
                <h1>Books</h1>
            </div>
            {/* book card */}
            <div className="grid md:grid-cols-3 gap-y-10">
                {
                    books.map((book)=> <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;