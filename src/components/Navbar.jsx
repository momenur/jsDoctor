const Navbar = () => {
    const navOptions = <>
        <li className="px-4">Home</li>
        <li className="px-4">Service</li>
        <li className="px-4">Location</li>
        <li className="px-4">Doctors</li>
        <li className="px-4">Contract</li>
        <li className="px-4">About</li>
    </>
    return (
        <div className="fixed max-w-screen-xl px-16 text-white bg-transparent navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="text-3xl font-bold uppercase text-rose-200">js doctor</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-4 menu menu-horizontal">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="uppercase">Updating</a>
            </div>
        </div>
    );
};

export default Navbar;