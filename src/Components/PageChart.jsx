import { Bar, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis, BarChart } from "recharts";
import PropTypes from "prop-types";


const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        }
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
        Z`;
};
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PageChart = ({ data }) => {


    return (
        <div className="w-full h-[500px]">
            <ResponsiveContainer>
                <BarChart width={1100}
                    height={600}
                    data={data}

                    margin={
                        {
                            top: 20,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>

                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

PageChart.propTypes = {
    data: PropTypes.array,
};
TriangleBar.propTypes = {
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};


export default PageChart;