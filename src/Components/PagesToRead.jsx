import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import ReadChart from "./ReadChart";
import { getAddedBooks } from "../Utility/localstorage";

const PagesToRead = () => {

    const books = useLoaderData();

    const [addedBooks, setAddedBooks] = useState([]);

    useEffect(() => {
        const storedBookId = getAddedBooks();
        if (books.length > 0) {
            const readBooks = books.filter((book) => storedBookId.includes(book.bookId));
            setAddedBooks(readBooks);
        }
    }, [books]);
    return (
        <div className="">
            <ReadChart data={addedBooks}></ReadChart>
        </div>
    );
};

export default PagesToRead;