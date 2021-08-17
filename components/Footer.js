const Footer = () => {
    return ( 
        <div className="bg-dark">
            <div class="footer pt-6 md:pt-24">
                <div class="container mx-auto w-11/12 md:w-5/6">
                    <div class="md:flex md:flex-wrap py-6 md:pb-12">
                        <div class="md:w-3/4 mt-12 lg:mt-0">
                            <div class="sm:flex">
                                <div class="sm:flex-1">
                                <h6 class="text-4xl font-baskerville text-white uppercase mb-4">RST</h6>
                                
                                </div>
                                <div class="sm:flex-1 text-left mb-4 md:mb-0">
                                    <h6 class="text-base font-medium text-white uppercase mb-6">Menu</h6>
                                    <div>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">About</a>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">Menu</a>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">Blog</a>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">Contact</a>
                                    </div>
                                </div>
                                <div class="sm:flex-1 text-left">
                                <h6 class="text-base font-medium  font-dmsans text-white uppercase mb-6">Service</h6>
                                <div>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">Food</a>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">Delivery</a>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">Catering</a>
                                    <a href="#" class="text-white font-dmsans py-1 block hover:underline">Book</a>
                                </div>
                                </div>
                            </div>
                        </div>
                
                        <div class="md:w-1/4 mt-12 lg:mt-0">
                            <h6 class="text-base font-medium text-white uppercase mb-6">Social</h6>
                            <div class="flex sm:justify-center xl:justify-start">
                                <a href="" class="w-12 h-12 bg-pink rounded-full text-center py-3 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="" class="w-12 h-12 bg-pink rounded-full text-center py-3 ml-2 text-white hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="w-12 h-12 bg-pink rounded-full text-center py-3 ml-2 text-white hover:text-white hover:bg-red-600 hover:border-red-600">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        </div>
                
                </div>
            
                <div class="mt-4 py-4">
                    <div class="container mx-auto w-11/12 md:w-5/6 border-t border-solid border-gray-700">
                
                        <div class="md:flex md:items-center">
                        <div class="md:flex-1 text-center md:text-left">
                            <p class="text-gray-400 font-dmsans">Copyright &copy; Tasfia 2021. All Rights Reserved</p>
                        </div>
                        <div class="md:flex-1 text-center md:text-right">
                            <a href="#" class="py-2 pr-4 md:pr-8 text-white inline-block hover:underline font-dmsans">Terms of Use</a>
                            <a href="#" class="py-2 text-white inline-block hover:underline font-dmsans">Privacy Policy</a>
                        </div>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;