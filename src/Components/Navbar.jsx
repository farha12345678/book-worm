import { NavLink } from "react-router-dom";

const Navbar = () => {
        const links = <>
        <li><NavLink className={({isActive}) => isActive? 'border border-green-400 text-green-600 font-bold': 'font-normal'} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive? 'border border-green-400 text-green-600 font-bold': 'font-normal'} to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink className={({isActive}) => isActive? 'border border-green-400 text-green-600 font-bold': 'font-normal'} to="/pagesToRead">Pages to read</NavLink></li>
        <li><NavLink className={({isActive}) => isActive? 'border border-green-400 text-green-600 font-bold': 'font-normal'} to="/wish">Wishlist</NavLink></li>
        <li><NavLink className={({isActive}) => isActive? 'border border-green-400 text-green-600 font-bold': 'font-normal'} to="/blogs">Blogs</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100  z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Book Worm</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end mr-10">
                    <a className="btn mr-2 bg-green-400 text-white text-lg">Sign In</a>
                    <a className="btn bg-blue-400 text-white text-lg">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;