const Header = () => {
    return ( 
        <div className="w-full bg-dark md:bg-transparent">
            <div className="w-11/12 md:w-5/6 mx-auto">
                <header className="w-full md:w-5/6 flex flex-row justify-between md:justify-start items-center md:absolute md:z-10 space-x-4  py-6">
                
                    <a href="#" className="block lg:pr-8">
                        <span className="text-4xl text-white font-baskerville">RST</span>
                    </a>
                    <div className="w-full">
                        <nav className="flex justify-end">
                            <img className="h-12 md:hidden" src="images/menu.png" alt="menu"></img>
                        </nav>
                        <nav className="hidden lg:w-full lg:flex lg:flex-row lg:justify-between">
                            <div className="py-2">
                                <a href="" className="px-8 text-white font-medium" >About</a>
                                <a href="" className="px-8 text-white font-medium" >Menu</a>
                                <a href="" className="px-8 text-white font-medium" >Blog</a>
                                <a href="" className="px-8 text-white font-medium" >Content</a>
                            </div>
                            <div>
                                <button className="p-2 w-40 text-white border border-white">Appointment</button>
                                {/* <a href="" className="px-8 text-white font-medium" >Appointment</a> */}
                            </div>
                            
                        </nav>
                    </div>
                </header>
            </div>
            
        </div>
    );
}

export default Header;