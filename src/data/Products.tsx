export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    categories: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Peony Mini Dress",
        price: 25.99,
        description: "Comfortable and stylish men's t-shirt made of 100% cotton.",
        image: require("../assets/shop_1.webp"),
        categories: "Dresses",
    },
    {
        id: 2,
        name: "Maria swing dress",
        price: 79.99,
        description: "Warm and fashionable women's jacket perfect for winter.",
        image: require("../assets/shop_2.webp"),
        categories: "Dresses",
    },
    {
        id: 3,
        name: "Unisex Sneakers",
        price: 49.99,
        description: "Stylish unisex sneakers for everyday wear.",
        image: require("../assets/shop_3.webp"),
        categories: "Shop",
    },
    {
        id: 4,
        name: "Men's Watch",
        price: 99.99,
        description: "Elegant men's watch with leather strap and stainless steel case.",
        image: require("../assets/shop_4.jpeg"),
        categories: "Shop",
    },
    {
        id: 5,
        name: "Women's Handbag",
        price: 59.99,
        description: "Stylish women's handbag suitable for various occasions.",
        image: require("../assets/shop_5.webp"),
        categories: "Shop",
    },
    {
        id: 6,
        name: "Athletic Shorts",
        price: 34.99,
        description: "Breathable athletic shorts designed for comfort during workouts.",
        image: require("../assets/shop_6.webp"),
        categories: "Shop",
    },
];
