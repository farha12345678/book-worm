import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid } from 'recharts';
import { getBooks } from '../Utility/localstorage';


const PagesToRead = () => {


    // const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },...]
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const [book, setBooks] = useState([])


    useEffect(() => {
        const storedBooks = getBooks()
        setBooks(storedBooks)


    }, [])

    return (
        <div>
            <BarChart width={800}
                height={300}
                data={book}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={book.bookName} name={book.author} />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>

                </Bar>
                
            </BarChart>
        </div >
    );
};

export default PagesToRead;