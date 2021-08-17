import Carousel from 'react-elastic-carousel'
import Item from "./Item"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

const items = [
    {
        id: 1,
        title: "Independence Day",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        photo: "https://media-eng.dhakatribune.com/uploads/2018/03/web-national-memorial-savar-independence-day-Dhaka-Tribune-edited-26.03.2018.jpg"
    },
    {
        id: 2,
        title: "Valentines' Day",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        photo: "https://timesofindia.indiatimes.com/thumb/msid-80855266,width-1200,height-900,resizemode-4/.jpg"
    },
    {
        id: 3,
        title: "Eid-ul-Fitr",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        photo: "https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2020/10/EID-LEAD1280.jpg"
    },
    {
        id: 4,
        title: "National Day",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        photo: "https://thumbs.dreamstime.com/z/new-birthday-celebration-balloon-ribbon-illustration-39824684.jpg"
    },
    {
        id: 5,
        title: "Govt Holiday",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        photo: "https://previews.123rf.com/images/tartila/tartila1907/tartila190700094/127557809-people-celebrating-young-men-and-women-dance-at-celebration-party-joyful-balloons-and-confetti-happi.jpg"
    }
]

const EventCarousel = () => {
    return ( 
        <div>
            <Carousel enableAutoPlay autoPlaySpeed={2500} breakPoints={breakPoints}>
                {items.map((item) => (
                    <Item key={item.id}>
                        <div className="bg-white flex flex-col justify-center bg-caro-bg px-6 w-64 md:w-full">
                            <img className="mb-6 h-40 md:h-52 w-full object-cover" src={item.photo}/>
                            <h2 className="text-gray-700 text-lg font-dmsans mb-4">{item.title}</h2>
                            <p className="text-gray-400 text-sm font-dmsans">{item.description}</p>
                        </div>
                    </Item>
                ))}
            </Carousel>
        </div>
    );
}

export default EventCarousel;