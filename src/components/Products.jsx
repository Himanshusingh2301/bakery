import { useState } from 'react';

const productCategories = {
 
  breads: [
    {
      id: 1,
      name: "Traditional Indian Sourdough Bread",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1591458736923-c06a260e3412?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Healthy Whole Wheat Bread Loaf",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1565181917578-a87c12e04ff7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Herb Garlic Focaccia Bread",
      price: "₹279",
      image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Soft Italian Ciabatta Bread Loaf",
      price: "₹319",
      image: "https://images.unsplash.com/photo-1586765501508-cffc1fe200c8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Freshly Baked French Baguette Bread",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1677329175333-c08df2a3181d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Nutritious Multigrain Sandwich Bread",
      price: "₹269",
      image: "https://images.unsplash.com/photo-1671576130514-31bab884c2e7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],

  pastries: [
    {
      id: 7,
      name: "Classic Butter Croissant Pastry",
      price: "₹129",
      image: "https://images.unsplash.com/photo-1681217723121-bbb28b55d166?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      name: "Fresh Fruit Danish Pastry",
      price: "₹149",
      image: "https://i.pinimg.com/736x/4f/c0/05/4fc005e5633fdaad56aee3d1e8afa55d.jpg"
    },
    {
      id: 9,
      name: "Chocolate Cream Filled Éclair",
      price: "₹159",
      image: "https://i.pinimg.com/236x/cc/9d/b7/cc9db72144f0ea515a7a8dc76e14c63e.jpg"
    },
    {
      id: 10,
      name: "Soft Cinnamon Sugar Roll",
      price: "₹119",
      image: "https://i.pinimg.com/736x/8d/6f/31/8d6f313f35baab2e63c9753894b50555.jpg"
    },
    {
      id: 11,
      name: "Classic Apple Tart Dessert",
      price: "₹199",
      image: "https://i.pinimg.com/736x/ae/1f/f3/ae1ff30727179c8964c55d72e07e412d.jpg"
    },
    {
      id: 12,
      name: "French Vanilla Mille Feuille Pastry",
      price: "₹229",
      image: "https://i.pinimg.com/736x/a8/b4/d2/a8b4d2c6e1e31520b8724a5351d2a92c.jpg"
    }
  ],

  cakes: [
    {
      id: 13,
      name: "Rich Chocolate Truffle Cake",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 14,
      name: "Classic Vanilla Cream Cake",
      price: "₹799",
      image: "https://i.pinimg.com/webp/736x/4c/09/19/4c0919fc733981b0bdc947b366e22352.webp"
    },
    {
      id: 15,
      name: "New York Style Cheesecake Dessert",
      price: "₹999",
      image: "https://i.pinimg.com/736x/e4/7f/44/e47f449ff297760f4db6e068662de554.jpg"
    },
    {
      id: 16,
      name: "Premium Red Velvet Cake",
      price: "₹1099",
      image: "https://i.pinimg.com/736x/d2/67/61/d26761c67cbf60efef5a42ae5a26a0a3.jpg"
    },
    {
      id: 17,
      name: "Healthy Carrot Walnut Cake",
      price: "₹849",
      image: "https://i.pinimg.com/736x/23/30/fa/2330faf3d9a2da1fcfd9427ed7184201.jpg"
    },
    {
      id: 18,
      name: "Black Forest Cream Cake",
      price: "₹1199",
      image: "https://i.pinimg.com/736x/6f/bf/d4/6fbfd4d0d4ec8ad103820cb6912fdf47.jpg"
    }
  ],

  donuts: [
    {
      id: 19,
      name: "Classic Sugar Glazed Donut",
      price: "₹79",
      image: "https://i.pinimg.com/736x/39/b8/7d/39b87d9a25d942e3ae4d7eefa9618cc8.jpg"
    },
    {
      id: 20,
      name: "Dark Chocolate Filled Donut",
      price: "₹99",
      image: "https://i.pinimg.com/736x/78/58/3e/78583e539fb0032b4a81a6e8d2ea51ab.jpg"
    },
    {
      id: 21,
      name: "Strawberry Cream Filled Donut",
      price: "₹109",
      image: "https://i.pinimg.com/736x/95/2e/c1/952ec1fbd621a59c128adbd1fa5bee4b.jpg"
    },
    {
      id: 22,
      name: "Boston Cream Classic Donut",
      price: "₹119",
      image: "https://i.pinimg.com/236x/f6/11/1e/f6111e03ec37d7a1f890507327afce5c.jpg"
    },
    {
      id: 23,
      name: "Maple Syrup Glazed Donut",
      price: "₹109",
      image: "https://i.pinimg.com/736x/da/ae/66/daae66fbf85bdefd3c818f937d00e3e8.jpg"
    },
    {
      id: 24,
      name: "Colorful Sprinkle Topped Donut",
      price: "₹89",
      image: "https://i.pinimg.com/736x/9a/d2/0e/9ad20e2a2d59cae020b8b0f36b6d8356.jpg"
    }
  ]

};

const categories = [
  { key: "breads", label: "Breads" },
  { key: "pastries", label: "Pastries" },
  { key: "cakes", label: "Cakes" },
  { key: "donuts", label: "Donuts" }
];

function ProductCard({ product }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100" data-aos="fade-up">
      <div className="relative overflow-hidden h-[250px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-2xl font-bold text-amber-500 mt-2 mb-4">{product.price}</p>
        <button className="water-wave-btn cursor-pointer px-4 py-2 bg-[#d99145] text-white rounded-full font-medium mt-auto">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("breads");

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white px-5 py-16 sm:px-8 lg:px-16 lg:py-18">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Indie Flower", cursive' }}>Our Products</h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-400 mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our freshly baked collection of premium bakery products</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 cursor-pointer py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories[activeCategory].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
