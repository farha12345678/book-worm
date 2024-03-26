import { useEffect, useState } from "react";
import { getWish } from "../../Utility/localstorage";
import BookCard from "../Books/BookCard";


const WishlistBooks = () => {
     const [wish, setWish] = useState([])
    
    
        useEffect(() => {
            const storedWish = getWish()
            setWish(storedWish)
            
        }, [])
    return (
        <div className="grid md:grid-cols-3 gap-y-10">
        {
            wish.map((book) => <BookCard key={book.bookId} book={book}></BookCard>)
        }
    </div>
    );
};

export default WishlistBooks;