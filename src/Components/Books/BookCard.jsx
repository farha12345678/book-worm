import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 


const BookCard = ({book }) => {
    const {bookId, bookName, author, image, tags, category, rating  } = book;
    return (
        <div>
           <Link to={`/book/${bookId}`} className="card mx-auto my-10 w-96 h-[500px] bg-base-100 shadow-xl transition border-2 hover:scale-105 ">
            
                <figure className="px-10 pt-10 ">
                    <img src={image} alt="Shoes" className="rounded-xl h-72" />
                </figure>
                <div className="flex gap-x-2 mt-5 ml-5">
                    {tags.map(tag => <a className="border rounded-3xl  bg-base-200  text-green-500" key={tag} href="http://" target="_blank" rel="noopener noreferrer">#{tag}</a>) }
                    
                    
                </div>
               
                <div>
                    <h2 className="card-title ml-5 text-xl mt-2 font-bold">{bookName}</h2>
                    <p className="ml-5 text-base font-normal my-4"><span>By:</span>{author}</p>

                </div>
                <hr />
                <div className="flex justify-between ml-5 my-4 text-gray-600 ">
                    <p className="text-xl font-medium"><small>{category}</small></p>
                    <div className="flex gap-x-2 mr-2 ">
                        <p>{rating}</p>
                        <p className="text-xl"><CiStar></CiStar></p>
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