import { Restaurant } from "../../interfaces/restaurant.interface";


export const restaurants: Restaurant[] = [
    {
        name: "The Spicy Curry House",
        description: "Authentic Indian cuisine with a modern twist.",
        location: "Downtown Manhattan",
        logo: "https://example.com/spicycurryhouse-logo.png",
        menu: ["Butter Chicken", "Samosas", "Tandoori Naan"],
        rating: 4.7,
        reviews: ["Great food and service!", "The naan was amazing!"]
    },
    {
        name: "La Dolce Vita Pizzeria",
        description: "Traditional Italian pizzas made with fresh ingredients.",
        location: "Brooklyn",
        logo: "https://example.com/ladolcevita-logo.png",
        menu: ["Margherita Pizza", "Pepperoni Pizza", "Calzone"],
        rating: 4.5,
        reviews: ["Best pizza in town!", "Love the thin crust!"]
    },
    {
        name: "Sushi Paradise",
        description: "Exquisite sushi rolls and Japanese delicacies.",
        location: "Midtown Manhattan",
        logo: "https://example.com/sushiparadise-logo.png",
        menu: ["California Roll", "Dragon Roll", "Miso Soup"],
        rating: 4.8,
        reviews: ["Fresh fish and creative rolls!", "A sushi lover's dream!"]
    },
    {
        name: "The Burger Joint",
        description: "Gourmet burgers with unique toppings and combinations.",
        location: "Queens",
        logo: "https://example.com/burgerjoint-logo.png",
        menu: ["Classic Burger", "Bacon Cheeseburger", "Veggie Burger"],
        rating: 4.3,
        reviews: ["Juicy burgers with great flavor!", "Fries are a must-try!"]
    }
];
