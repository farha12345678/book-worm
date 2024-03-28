
// import PropTypes from 'prop-types';



import { useLoaderData, useParams } from "react-router-dom";
import {  WishBooks, readBooks } from "../../Utility/localstorage";


const BookDetails = () => {

    const handleRead = book => {
        readBooks(book)
    }
    const handleWishList = book => {
        WishBooks(book)
    }

    const books = useLoaderData()
    
    const { id } = useParams()
    const book = books.find(book => book.bookId === id)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={book.image} className="max-w-sm mr-20 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{book.bookName}</h1>
                        <p><small>By: {book.author}</small></p>
                        <hr />
                        <p><small>{book.category}</small></p>
                        <hr />
                        <p className="py-6">{book.review}</p>
                        <div className="flex gap-x-5">
                    {book.tags.map(tag => <a key={tag} href="http://" target="_blank" rel="noopener noreferrer">#{tag}</a>) }
                    
                    
                </div>
                        <hr />
                        <div>
                            <p><small>Number of Pages : {book.totalPages}</small></p>
                            <p><small>Publisher :{book.publisher}  </small></p>
                            <p><small>Year of Publishing : {book.yearOfPublishing} </small></p>
                            <p><small>Rating :  {book.rating}</small></p>
                        </div>
                        <div className="flex gap-x-5 mt-10">
                            <button onClick={() => handleRead(book)} className="btn btn-primary">Read</button>
                            <button onClick={() => handleWishList(book)} className="btn">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BookDetails;