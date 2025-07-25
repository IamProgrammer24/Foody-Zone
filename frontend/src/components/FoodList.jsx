import React from "react";

const FoodList = () => {
  const foodItems = [
    {
      id: 1,
      title: "Margherita Pizza",
      description: "Classic cheese & tomato sdfsa asdfasdf asfd sd ",
      price: 8.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s",
    },
    {
      id: 2,
      title: "Veggie Burger",
      description: "Loaded with fresh veggies",
      price: 6.5,
      image: "https://via.placeholder.com/100x100.png?text=Burger",
    },
    {
      id: 3,
      title: "Spaghetti",
      description: "Pasta with tomato sauce",
      price: 7.25,
      image: "https://via.placeholder.com/100x100.png?text=Spaghetti",
    },
    {
      id: 4,
      title: "Tacos",
      description: "Mexican spicy tacos",
      price: 5.75,
      image: "https://via.placeholder.com/100x100.png?text=Tacos",
    },
    {
      id: 5,
      title: "Sushi",
      description: "Fresh sushi platter",
      price: 12.5,
      image: "https://via.placeholder.com/100x100.png?text=Sushi",
    },
    {
      id: 6,
      title: "Salad Bowl",
      description: "Healthy green salad",
      price: 4.99,
      image: "https://via.placeholder.com/100x100.png?text=Salad",
    },
  ];

  return (
    <div className="pt-10 bg-transparentmin-h-screen">
      <div className="flex flex-wrap justify-center gap-4">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/4 flex bg-white/5 backdrop-blur-md rounded-lg shadow-md border border-white/20 overflow-hidden mb-4"
          >
            {/* Left: Image */}
            <div className="w-2/4 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-30 h-30 rounded-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </div>
              <div className="text-right mt-4">
                <p className="inline-block text-md font-bold text-white bg-red-500 px-2 py-0.5 rounded-lg">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
