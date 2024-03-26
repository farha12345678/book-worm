import { useState } from "react";
import { Link } from "react-router-dom";

const ListedBooks = () => {
    const [tableIndex , setTableIndex] = useState(0)
    return (
        <div>
            <div className="bg-base-300 rounded-2xl pt-8 mx-auto h-24 text-center">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            {/* tab */}
            <div role="tablist" className="tabs tabs-lifted text-center flex ml-20">
                <Link onClick={() => setTableIndex(0)} role="tab" className={`${tableIndex === 0? 'tab-active':'tab' }`}>Read Books</Link>
                <Link onClick={() => setTableIndex(1)} role="tab" className={`${tableIndex === 1? 'tab-active':'tab' }`}>Wishlist Books</Link>
            </div>
        </div>
    );
};

export default ListedBooks;