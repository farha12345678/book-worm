import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 


const BookCard = ({book }) => {
    const {bookId, bookName, author, image, tags, category, rating } = book;
    return (
        <div>
           <Link to={`/book/${bookId}`} className="card w-96 bg-base-100 shadow-xl transition border-2 hover:scale-105">
            
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-72" />
                </figure>
                <div className="flex justify-between">
                    <p><small>{tags}</small></p>
                    <p><small>{tags}</small></p>
                </div>
                <div>
                    <h2 className="card-title">{bookName}</h2>
                    <p><span>By:</span>{author}</p>

                </div>
                <hr />
                <div className="flex justify-between">
                    <p><small>{category}</small></p>
                    <div className="flex">
                        <p>{rating}</p>
                        <p><CiStar></CiStar></p>
                    </div>
                </div>
                </Link>
            </div>
    
        
    );
};
BookCard.propTypes = {
    book : PropTypes.object
}

export default BookCard;