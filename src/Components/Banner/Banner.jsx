import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen md:w-[1100px] mx-auto rounded-3xl my-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/Banner.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="mr-40">
                        <h1 className="text-5xl font-bold mb-10">Books to freshen up <br />
                            your bookshelf</h1>

                        <NavLink to="/listedBooks"><button className="btn bg-green-500 text-xl text-white font-bold">View the list</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;