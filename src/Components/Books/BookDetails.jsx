
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
                        <h1 className="text-5xl font-bold mb-5">{book.bookName}</h1>
                        <p className="text-xl font-medium mb-2"><small>By: {book.author}</small></p>
                        <hr />
                        <p className="text-xl my-2 font-medium"><small>{book.category}</small></p>
                        <hr />
                        <p className="py-6"><span className="text-xl font-bold mr-2">Review:</span>{book.review}</p>
                        <div className="flex gap-x-5 mb-5">
                   <span className="font-bold text-lg">Tag:</span> {book.tags.map(tag => <a className=" border rounded-3xl  bg-base-300  text-green-500" key={tag} href="http://" target="_blank" rel="noopener noreferrer">#{tag}</a>) }
                    
                    
                </div>
                        <hr />
                        <div>
                            <p className="mb-2 mt-2"><small>Number of Pages :</small><span className="font-bold ml-5"> {book.totalPages}</span></p>
                            <p className="mb-2"><small>Publisher :</small><span className="font-bold ml-5">{book.publisher}  </span></p>
                            <p className="mb-2"><small>Year of Publishing :  </small><span className="font-bold ml-5">{book.yearOfPublishing}</span></p>
                            <p className="mb-2"><small>Rating : </small><span className="font-bold ml-5"> {book.rating}</span></p>
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