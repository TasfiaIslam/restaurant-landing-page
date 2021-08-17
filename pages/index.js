import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import MenuTab from '../components/MenuTab'
import Footer from '../components/Footer'
import EventCarousel from '../components/EventCarousel'


export default function Home() {
  return (
    <div className="">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      {/* Mobile Navbar */}
      <Header/>
      {/* Section 1 */}
      <div className="w-full relative z-0">
        <div className="flex flex-col md:flex-row flex-wrap w-full">
          <div className="bg-dark flex justify-center items-center w-full md:w-1/2">
              <div className="flex flex-col justify-start w-3/4 px-4 md:px-20 py-20">
                <div className="space-x-4 mb-4">
                  <span className="mb-1.5 inline-block"><img className="" src="images/line-white.png" alt="menu"></img></span>
                  <p className="inline-block uppercase text-white text-base font-dmsans">Restaurant</p>
                </div>
                <p className="mt-4 text-5xl md:text-7xl text-white font-baskerville uppercase">Top <br/>Service <br/><em>Cuisine</em></p>
                <button className="my-4 md:my-12 p-2 w-40 uppercase text-white bg-pink">See Menu</button>
              </div>
          </div>
          <div className="bg-yellow-200 w-full md:w-1/2">
            <img className="object-cover h-full w-full" src="images/section1-background.png" alt="restaurant"></img>
          </div>
        </div>
      </div>
      
      {/* Section 2 - About */}
        <div className="bg-white w-11/12 md:w-5/6 mx-auto -mt-12 md:py-16 relative z-10">
            <div className="flex flex-col md:flex-row flex-wrap w-full">
              <div className="flex justify-center md:w-1/2">
                <img className="w-full mt-20 md:mt-0 object-cover md:h-full" src="images/section2-img.png" alt="restaurant"></img>
              </div>
              <div className="h-96 md:mt-8 md:w-1/2">
                  <div className="py-8 md:pl-20">
                    <div className="space-x-4 mb-8">
                      <span className="mb-1.5 inline-block"><img className="" src="images/line-black.png" alt="menu"></img></span>
                      <p className="inline-block uppercase text-gray-700 text-lg font-dmsans">About</p>
                    </div>
                    <p className="text-4xl md:text-6xl text-gray-800 font-baskerville mb-8">Making The <br/>Delicious Food</p>
                    <p className="mb-8 text-gray-400 font-dmsans">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language. Separated they live in Bookmarksgrove right at the coast.</p>
                    <button className="p-2 w-40 uppercase text-white bg-light">About Us</button>
                  </div>
              </div>
            </div>
        </div>

      {/* Section 3 - Reservation */}
      <div className="md:w-5/6 mx-auto md:py-16">
        <div className="flex flex-col md:flex-row">
          {/* Appointment */}
          <div className="h-80 md:w-1/2 bg-dark flex flex-col justify-center space-y-8 p-20">
              <div className="space-x-4">
                <span className="mb-1.5 inline-block"><img className="" src="images/line-white.png" alt="menu"></img></span>
                <p className="inline-block uppercase text-white text-sm font-dmsans">Appointment</p>
              </div>
              <p className="text-4xl text-white font-baskerville">Reservation</p>
              <button className="my-6 p-2 w-40 uppercase text-white border border-gray-400">Contact Us</button>
          </div>
          {/* Image */}
          <div className="h-80  md:w-1/2 relative">
            <img className="object-cover h-full w-full" src="images/section3-background.png"/>
            <div className="h-56 w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10">
              <p className="mb-14 text-2xl font-bold font-dmsans text-gray-800">+1 (234) 567-89-02</p>
              <span className="mb-3 text-gray-400 font-dmsans text-sm">Opening Hours</span>
              <p className="font-dmsans text-gray-800">9:00am – 10:00pm</p>
            </div>
          </div>
        </div>
      </div>
     
      {/* Section 4 - Features */}
      <div className="w-11/12 md:w-5/6 mx-auto md:py-16">
        <div className="flex flex-col">
          <div className="space-x-4 mt-10 mb-8">
            <span className="mb-1.5 inline-block"><img className="" src="images/line-black.png" alt="menu"></img></span>
            <p className="inline-block uppercase text-gray-700 text-lg font-dmsans">Features</p>
          </div>
          <p className="mb-8 text-5xl md:text-6xl text-gray-800 font-baskerville">First-Class Dining Experience</p>
          <div className="grid grid-flow-row md:grid-flow-col gap-x-4">
            <div className="relative mb-8">
              <img className="object-cover w-full h-72" src="images/ingredients.png"/>
              <img className="absolute bottom-28 md:bottom-36 right-6" src="images/fish-icon.png" />
              <p className="mt-10 mb-4 text-2xl text-gray-700 font-bold font-dmsans">Fresh Ingredients</p>
              <p className="text-gray-400 font-dmsans">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
            </div>
            <div className="relative mb-8">
              <img className="object-cover w-full h-72" src="images/service.png"/>
              <img className="absolute bottom-28 md:bottom-36 right-6" src="images/serve-icon.png" />
              <p className="mt-10 mb-4 text-2xl text-gray-700 font-bold font-dmsans">Fast Service</p>
              <p className="text-gray-400 font-dmsans">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
            </div>
            <div className="relative mb-8">
              <img className="object-cover w-full h-72" src="images/handmade.png"/>
              <img className="absolute bottom-28 md:bottom-36 right-6" src="images/bike-icon.png" />
              <p className="mt-10 mb-4 text-2xl text-gray-700 font-bold font-dmsans">Hand Made</p>
              <p className="text-gray-400 font-dmsans">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 - Order Food */}
      <div className="md:w-5/6 mx-auto md:py-16">
        <div className="flex flex-col md:flex-row">
          {/* Order food */}
          <div className="h-80 md:w-1/2 bg-dark flex flex-col justify-center space-y-8 p-20">
              <div className="space-x-4">
                <span className="mb-1.5 inline-block"><img className="" src="images/line-white.png" alt="menu"></img></span>
                <p className="inline-block uppercase text-white text-sm font-dmsans">Delivery</p>
              </div>
              <p className="text-5xl md:text-6xl text-white font-baskerville">Order Food</p>
              <button className="my-6 p-2 w-40 uppercase text-white border border-gray-400">Contact Us</button>
          </div>
          {/* Image */}
          <div className="h-80 md:w-1/2">
            <img className="object-cover h-full w-full" src="images/pasta.png"/>
          </div>
        </div>
      </div>
      
      {/* Section 7 - Our Chef */}
      <div className="bg-white w-11/12 md:w-5/6 mx-auto md:py-16">
          <div className="flex flex-col md:flex-row flex-wrap w-full">
            <div className="flex justify-center md:w-1/2">
              <img className="w-full mt-20 md:mt-0 object-cover md:h-full" src="images/chef-img-group.png" alt="restaurant"></img>
            </div>
            <div className="h-96 md:mt-8 mb-36 md:mb-0 md:w-1/2">
                <div className="py-8 md:pl-20">
                  <div className="space-x-4 mb-8">
                    <span className="mb-1.5 inline-block"><img className="" src="images/line-black.png" alt="menu"></img></span>
                    <p className="inline-block uppercase text-gray-700 text-lg font-dmsans">Our Chef</p>
                  </div>
                  <p className="text-6xl text-gray-800 font-baskerville mb-8">Svyatoslav Taushev</p>
                  <p className="mb-8 text-gray-400 font-dmsans">"There live the blind texts. Separated they live in right at the coast of the Semantics, a large language ocean. Flows by their place and supplies it with the necessary regelialia."</p>
                  <img className="p-2" src="images/chef-sign.png"/>
                </div>
            </div>
          </div>
        </div>

        {/* Section 8 - Upcoming events */}
        <div className="w-11/12 md:w-5/6 mx-auto md:py-16">
          <div className="space-x-4 mt-10 mb-8">
            <span className="mb-1.5 inline-block"><img className="" src="images/line-black.png" alt="menu"></img></span>
            <p className="inline-block uppercase text-gray-700 text-lg font-dmsans">Book A Table</p>
          </div>
          <p className="mb-8 text-5xl md:text-6xl text-gray-800 font-baskerville">Upcoming<br/>Events</p>
          <EventCarousel/>
        </div>

      {/* Section 10 - Blog */}
      <div className="bg-white w-11/12 md:w-5/6 mx-auto md:pb-16">
        <div className="flex flex-col">
          <div className="space-x-4 mt-10 mb-8">
            <span className="mb-1.5 inline-block"><img className="" src="images/line-black.png" alt="menu"></img></span>
            <p className="inline-block uppercase text-gray-700 text-lg font-dmsans">Blog</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="mb-8 text-6xl text-gray-800 font-baskerville">Our <br /> Articles</p>
            <div>
            <button className="md:mt-16 mb-6 md:mb-0 p-2 w-40 uppercase text-gray-400 font-bold border border-gray-400">See All</button>
            </div>
            
          </div>
        </div>
        <div className="grid grid-flow-row  md:grid-cols-4 gap-x-4">
          <div className="flex flex-col">
            <img className="mb-6 h-48 object-cover w-full" src="images/blog-receipts.png"/>
            <p className="uppercase mb-6 text-lg font-dmsans text-gray-800">Receipts</p>
            <p className="mb-6 text-gray-800 text-2xl font-bold font-dmsans">Slapped cozy a that lightheartedly</p>
            <p className="text-gray-400 text-lg font-dmsans">24 jun 2020</p>
          </div>
          <div className="flex flex-col">
            <img className="mb-6 h-48 object-cover w-full" src="images/blog-food.png"/>
            <p className="uppercase mb-6 text-lg font-dmsans text-gray-800">Food</p>
            <p className="mb-6 text-gray-800 text-2xl font-bold font-dmsans">On deer horse aboard tritely yikes</p>
            <p className="text-gray-400 text-lg font-dmsans">15 jun 2020</p>
          </div>
          <div className="flex flex-col">
            <img className="mb-6 h-48" src="images/blog-restaurant.png"/>
            <p className="uppercase mb-6 text-lg font-dmsans text-gray-800">Restaurant</p>
            <p className="mb-6 text-gray-800 text-2xl font-bold font-dmsans">Last view back on the skyline of her</p>
            <p className="text-gray-400 text-lg font-dmsans">12 jun 2020</p>
          </div>
          <div className="flex flex-col">
            <img className="mb-6 h-48" src="images/blog-delivery.png"/>
            <p className="uppercase mb-6 text-lg font-dmsans text-gray-800">Delivery</p>
            <p className="mb-6 text-gray-800 text-2xl font-bold font-dmsans">Pityful a rethoric question ran over</p>
            <p className="text-gray-400 text-lg font-dmsans">30 may 2020</p>
          </div>
        </div>
      </div>

      {/* Section 5 - Menu Tab */}
      {/* <div className="w-11/12 md:w-5/6 mx-auto my-16">
          <MenuTab />
      </div> */}

      {/* Section 11 - Appointment */}
      <div className="md:w-5/6 mx-auto mt-20 -mb-10">
        <div className="flex flex-col md:flex-row">
          {/* Appointment */}
          <div className="h-80 md:w-1/2 bg-gray-700 flex flex-col justify-center space-y-8 p-8 md:p-20">
              <div className="space-x-4">
                <span className="mb-1.5 inline-block"><img className="" src="images/line-white.png" alt="menu"></img></span>
                <p className="inline-block uppercase text-white text-sm font-dmsans">Appointment</p>
              </div>
              <p className="text-4xl text-white font-bold font-baskervilee">+1 (234) 567-89-02</p>
              <div className="space-y-2">
                <span className="text-gray-400 font-dmsans text-sm">Opening Hours</span>
                <p className="font-dmsans text-white">9:00am – 10:00pm</p>
              </div>
          </div>
          {/* Order now */}
          <div className="h-80 md:w-1/2 bg-white flex flex-col justify-center space-y-8 p-8 md:p-20 border border-gray-200">
              <div className="space-x-4">
                <span className="mb-1.5 inline-block"><img className="" src="images/line-black.png" alt="menu"></img></span>
                <p className="inline-block uppercase text-gray-700 text-sm font-dmsans">Delivery</p>
              </div>
              <p className="text-5xl md:text-6xl text-gray-800 font-baskerville">Order Now</p>
              <div>
                <button className="my-6 p-2 w-40 uppercase text-gray-400 border border-gray-400">Contact Us</button>
              </div>
          </div>
        </div>
      </div>

      {/* Section 12 - Footer */}
      <Footer />
    </div>
  )
}
