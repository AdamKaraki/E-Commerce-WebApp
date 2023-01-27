// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Coffee",
        price: 4.99,
        link:"https://www.freeiconspng.com/uploads/coffee-icon-png-1.png"
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Sunglasses",
        price: 9.99,
        link:"https://cdn.shopify.com/s/files/1/0111/6962/8223/products/distil-union-maglock-sunglasses-noisette-black-gray-hero_256x.png?v=1651090845"
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Camera",
        price: 39.99,
        link:"https://www.freeiconspng.com/uploads/camera-icon--reality-icons--softiconsm-29.png"
    },
    {
        id: "1",
        title: "Hat",
        price: 5.99,
        link:"https://mario.wiki.gallery/images/0/0c/SMO_Wario_Cap.png"
    },
    {
        id: "2",
        title: "Beanie",
        price: 3.99,
        link:"https://cdn.shopify.com/s/files/1/0418/5125/6989/products/Beanie_Red-2_256x.png?v=1669043268"
    },
    {
        id: "3",
        title: "Plant",
        price: 12.99,
        link:"https://public.blenderkit.com/thumbnails/assets/73daeb48090d445e96affba467564ad2/files/thumbnail_09191985-af2b-4e1d-a888-a2092b721c9e.png.256x256_q85_crop-%2C.png"
    },
    {
        id: "4",
        title: "Statue",
        price: 335.99,
        link:"https://images.vexels.com/media/users/3/268222/isolated/lists/368c4b36eb0cc26ffd7d5ac2a0762c00-hyperrealistic-greek-sculpture.png"
    },
    {
        id: "5",
        title: "Laptop",
        price: 499.99,
        link:"https://www.freeiconspng.com/thumbs/laptop-png/laptop-png-24.png"
    },
    {
        id: "6",
        title: "Mouse",
        price: 19.99,
        link:"https://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7668.png"
    }
    
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };