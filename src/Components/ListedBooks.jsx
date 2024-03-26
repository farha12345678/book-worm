import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tableIndex , setTableIndex] = useState(0)
    return (
        <div>
            <div className="bg-base-300 rounded-2xl pt-8 mx-auto h-24 text-center">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            {/* tab */}
            <div role="tablist" className="tabs tabs-lifted text-center flex ml-20">
                <Link to='' onClick={() => setTableIndex(0)} role="tab" className={`${tableIndex === 0? 'tab-active border border-b-0 font-semibold':'tab' }`}>Read Books</Link>
                <Link to={`wishlist`} onClick={() => setTableIndex(1)} role="tab" className={`${tableIndex === 1? 'tab-active border border-b-0 font-semibold':'tab' }`}>Wishlist Books</Link>
               
            </div>
            <Outlet/>
        </div>
    );
};

export default ListedBooks;