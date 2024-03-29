

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mx-20">
            <h1 className="text-6xl font-bold text-black mb-10">Oppsss!!</h1>
            {/* <div >
                <img className="w-[1100px] h-[450px]" src="/error image.png" alt="" />
            </div> */}
            <Link to="/"><button className="btn bg-green-600 text-white">Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;