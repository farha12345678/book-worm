

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mx-20">
            <h1 className="text-6xl font-bold text-black mb-10">Oppsss!!</h1>
            <Link to="/"><button>Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;