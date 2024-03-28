import { useEffect, useState } from "react";
import { getBooks } from "../Utility/localstorage";
import { useLoaderData } from "react-router-dom";
import PageChart from "./PageChart";






const PagesToRead = () => {


    const books = useLoaderData();

    const [addedBook, setAddedBooks] = useState([])

    

    useEffect(() => {
        const storedBookId = getBooks()

        if (books.length > 0) {

            const readBook = books.filter((book) => storedBookId.includes(book.bookId))
            setAddedBooks(readBook);
            

        }
    }, [books]);

   
    return (
        <div className="">
        <PageChart data={addedBook}></PageChart>
        </div>
    );
};



export default PagesToRead;
