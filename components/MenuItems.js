export const MenuItems = () => {
    return (
        <div className="flex flex-row items-center mb-8">
            <img className="w-40 mt-20 md:mt-0 object-cover md:h-28 mx-12" src="images/menu/mushroom.png" alt="restaurant"></img>
            <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <h3 className="mb-2 font-bold text-lg text-gray-700">Italian Mushroom</h3>
                <p className="text-gray-400 text-sm">Mushroom / Garlic / Veggies</p>
            </div>
            <h2 className="font-baskerville font-bold text-2xl text-gray-600">$ 90</h2>
            </div>
        </div>
    )
  }