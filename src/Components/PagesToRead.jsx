import { useEffect, useState } from "react";
import { getBooks } from "../Utility/localstorage";
import { useLoaderData } from "react-router-dom";

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";



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

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (books) => {
        const { fill, x, y, width, height } = books;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <BarChart width={1100}
                height={600}
                data={addedBook}
                
                margin={
                    {
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}>
                
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {addedBook.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>

            </BarChart>



        </div>
    );
};

export default PagesToRead;
