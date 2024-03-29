import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { TbPageBreak } from "react-icons/tb";

const ReadCard = ({ book }) => {
   
    
    return (
        <div>
            <div className="hero border gap-y-20 md:w-[1100px] mx-auto my-10 rounded-3xl  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={book.image} className="mr-20 h-80 rounded-lg shadow-2xl bg-base-300" />
                    <div>

                        <h1 className="text-2xl font-bold">{book.bookName}</h1>
                        <p>By: {book.author}</p>
                        <div>
                            <div className="flex gap-x-2 mt-5 ">
                                <span className='text-lg font-bold'> Tag:</span> {book.tags.map(tag => <a className="border rounded-3xl  bg-base-100  text-green-500 " key={tag} href="http://" target="_blank" rel="noopener noreferrer">#{tag}</a>)}
                                <div className='flex'>
                                    <p className='text-2xl'><CiLocationOn></CiLocationOn></p>
                                    <p>Year Of Publishing : {book.yearOfPublishing}</p>
                                </div>

                            </div>
                            <div className='flex gap-x-5 my-5'>
                                <div className='flex'>
                                    <p className='text-2xl '><IoPeopleOutline></IoPeopleOutline></p>
                                    <p className='ml-2'>Publisher: {book.publisher}</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-2xl'><TbPageBreak></TbPageBreak></p>
                                    <p>Page: {book.totalPages}</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                       
                       <div className='flex gap-x-10'>
                       <button className="border rounded-lg bg-blue-100 text-blue-400 text-base font-medium mt-5">Category :{book.category}</button>
                       <button className="border rounded-lg bg-pink-50 text-orange-400 text-base font-normal mt-5">Rating :{book.rating}</button>
                       <button className="border rounded-lg bg-green-600 text-white text-base font-normal mt-5">View Details</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ReadCard.propTypes = {
    book: PropTypes.object
}


export default ReadCard;