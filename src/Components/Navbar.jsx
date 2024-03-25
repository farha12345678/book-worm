

const Navbar = () => {
//     const links = <>
//     <li><NavLink to="/">Home</NavLink></li>
//     <li><NavLink to="/jobs">Listed Books</NavLink></li>
//     <li><NavLink to="/applied">Pages to read</NavLink></li>
//     <li><NavLink to="/stat">Wishlist</NavLink></li>
//     <li><NavLink to="/blogs">Blogs</NavLink></li>
// </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Listed Books</a></li>
                            <li><a>Pages to Read</a></li>
                            <li><a>Wishlist</a></li>
                            <li><a>Blogs</a></li>
                          
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                            <li><a>Listed Books</a></li>
                            <li><a>Pages to Read</a></li>
                            <li><a>Wishlist</a></li>
                            <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn mr-2">Sign In</a>
                    <a className="btn">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;