import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Condition from './components/Condition';
import Panier from './components/Panier';
import Category from "./components/Category";
import CategoryMarque from './components/CategoryMarque';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState([
    {
      id: 1,
      categorymarque: "lattafa", 
      category: "femme",
      titre: "Eclaire Lattafa",
      image: "https://parfumstore.ma/wp-content/uploads/2024/07/eclair-lattafa-parfum-prix-maroc.webp",
      price: 299.00,
      notes: {
        tete: "Citron, Poire",
        coeur: "Jasmin, Rose",
        fond: "Patchouli, Musc"
      }
    },
    {
      id: 2,
      categorymarque: "lattafa", 
      category: "unisex",
      titre: "Barakkat Gentle",
      image: "https://parfumstore.ma/wp-content/uploads/2024/07/barakkat-gentle-gold-Prix-Au-Maroc.webp",
      price: 180.00,
      notes: {
        tete: "Safran, Bergamote",
        coeur: "Ambre, Jasmin",
        fond: "Cèdre, Vanille"
      }
    },
    {
      id: 3,
      categorymarque: "lattafa", 
      category: "femme",
      titre: "Pink Shimmer",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/pink-shimmer-secret-maison-alhambra-pour-femme.webp",
      price: 179.00,
      notes: {
        tete: "Fraise, Pêche",
        coeur: "Rose, Magnolia",
        fond: "Musc, Ambre"
      }
    },
    {
      id: 4,
      categorymarque: "lattafa", 
      category: "femme",
      titre: "Philos Rosso",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/45991_0-800x800.jpg.webp",
      price: 150.90,
      notes: {
        tete: "Pamplemousse, Poivre rose",
        coeur: "Lavande, Sauge",
        fond: "Bois de santal, Musc"
      }
    },
    {
      id: 5,
      categorymarque: "lattafa", 
      category: "femme",
      titre: "Lattafa Yara",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/lattafa-yara-eau-de-parfum-prix-maroc-prix-rabat-1.webp",
      price: 199.00,
      notes: {
        tete: "Fleur d'oranger, Citron",
        coeur: "Jasmin, Vanille",
        fond: "Ambre, Bois de cèdre"
      }
    },
    {
      id: 6,
      categorymarque: "lattafa", 
      category: "femme", 
      titre: "La Voie",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/lavoiemaisonalhambra01_530x@2x-800x800.webp",
      price: 149.00,
      notes: {
        tete: "Bergamote, Cassis",
        coeur: "Rose, Muguet",
        fond: "Bois d'ambre, Patchouli"
      }
    },
    {
      id: 7,
      categorymarque: "lattafa", 
      category: "femme", 
      titre: "Ameerat Al Arab",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/ameerat-al-arab-asdaaf-pour-femme-au-maroc.webp",
      price: 219.00,
      notes: {
        tete: "Mandarine, Poire",
        coeur: "Jasmin, Fleur d'oranger",
        fond: "Musc, Cèdre"
      }
    },
    {
      id: 8,
      categorymarque: "lattafa", 
      category: "homme", 
      titre: "I Am The King",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/i-am-the-king-ana-al-malik-100ml-pour-homme.webp",
      price: 189.00,
      notes: {
        tete: "Poivre noir, Cardamome",
        coeur: "Lavande, Sauge",
        fond: "Patchouli, Ambre"
      }
    },
    {
      id: 9,
      categorymarque: "lattafa", 
      category: "femme", 
      titre: "Lovely Cherie",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/lovely-cherie-maison-alhambra-prix-maroc-.webp",
      price: 199.00,
      notes: {
        tete: "Framboise, Cassis",
        coeur: "Rose, Pivoine",
        fond: "Vanille, Musc"
      }
    },
    {
      id: 10,
      categorymarque: "maison-alhambra", 
      category: "homme",
      titre: "Maahir Lattafa",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/maahir-lattafa-Eau-de-Parfum.webp",
      price: 249.00,
      notes: {
        tete: "Bergamote, Poire",
        coeur: "Jasmin, Rose",
        fond: "Bois de santal, Ambre"
      }
    },
    {
      id: 11,
      categorymarque: "maison-alhambra", 
      category: "femme",
      titre: "Fakhar Rose Lattafa",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/fakhar-rose-lattafa-femme-prix-maroc-430x430.webp",
      price: 249.49,
      notes: {
        tete: "Fraise, Framboise",
        coeur: "Rose, Jasmin",
        fond: "Patchouli, Vanille"
      }
    },
    {
      id: 12,
      categorymarque: "maison-alhambra", 
      category: "femme",
      titre: "La Vita Bella Lattafa",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/la-vita-bella-maison-alhambra-maroc-430x430.webp",
      price: 199.00,
      notes: {
        tete: "Poire, Cassis",
        coeur: "Iris, Jasmin",
        fond: "Praline, Vanille"
      }
    },
    {
      id: 13,
      categorymarque: "maison-alhambra", 
      category: "femme",
      titre: "Washwasha Lattafa Perfumes",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/70-1-430x430.png",
      price: 190.00,
      notes: {
        tete: "Agrumes, Pêche",
        coeur: "Fleur d'oranger, Jasmin",
        fond: "Musc, Ambre"
      }
    },
    {
      id: 14,
      categorymarque: "maison-alhambra", 
      category: "femme",
      titre: "Fragrance World Barakkat Rouge",
      image: "https://parfumstore.ma/wp-content/uploads/2024/09/barakkat-rouge-540-fragrance-world-Meilleur-prix-maroc.webp",
      price: 189.00,
      notes: {
        tete: "Safran, Jasmin",
        coeur: "Ambre, Bois de cèdre",
        fond: "Musc, Résine"
      }
    },
    {
      id: 15,
      categorymarque: "maison-alhambra", 
      category: "unisex",
      titre: "Avant Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/avant-maison-alhambra-pour-homme-maroc-430x430.webp",
      price: 199.00,
      notes: {
        tete: "Bergamote, Citron",
        coeur: "Lavande, Romarin",
        fond: "Patchouli, Cèdre"
      }
    },
    {
      id: 16,
      categorymarque: "maison-alhambra", 
      category: "unisex",
      titre: "Glacier Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/Glacier-Pour-Homme-Maison-Alhambra-prix-maroc.webp",
      price: 259.00,
      notes: {
        tete: "Menthe, Citron",
        coeur: "Lavande, Sauge",
        fond: "Bois de santal, Ambre"
      }
    },
    {
      id: 17,
      categorymarque: "maison-alhambra", 
      category: "homme",
      titre: "Jorge Di Profumo ",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/jorge-di-profumo-maison-alhambra-pour-homme-430x430.webp",
      price: 189.19,
      notes: {
        tete: "Poivre, Cardamome",
        coeur: "Jasmin, Vétiver",
        fond: "Cèdre, Ambre"
      }
    },
    {
      id: 18,
      categorymarque: "maison-alhambra", 
      category: "unisex",
      titre: "Now Rave Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/now-rave-lattafa-pour-homme-prix-maroc-430x430.webp",
      price: 229.00,
      notes: {
        tete: "Citron vert, Bergamote",
        coeur: "Jasmin, Lavande",
        fond: "Bois de santal, Musc"
      }
    },
    {
      id: 19,
      categorymarque: "rave", 
      category: "homme",
      titre: "Ameer Al Arab Lattafa",
      image: "https://parfumstore.ma/wp-content/uploads/2024/09/Ameer-Al-Arab-Imperium-Asdaaf-meilleur-prix-maroc-casa-marrakech.webp",
      price: 229.00,
      notes: {
        tete: "Pomme, Bergamote",
        coeur: "Lavande, Cardamome",
        fond: "Patchouli, Vanille"
      }
    },
    {
      id: 20,
      categorymarque: "rave", 
      category: "homme",
      titre: "Ameer Al Oudh Lattafa",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/ameer-al-oudh-intense-oud-lattafa-prix-au-maroc-430x430.webp",
      price: 190.99,
      notes: {
        tete: "Safran, Cannelle",
        coeur: "Bois d'oud, Patchouli",
        fond: "Ambre, Vanille"
      }
    },
    {
      id: 21,
      categorymarque: "rave", 
      category: "homme",
      titre: "Avant Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/avant-maison-alhambra-pour-homme-maroc-430x430.webp",
      price: 199.00,
      notes: {
        tete: "Citron, Poivre noir",
        coeur: "Lavande, Romarin",
        fond: "Cèdre, Ambre gris"
      }
    },
    {
      id: 22,
      categorymarque: "rave", 
      category: "homme",
      titre: "Glacier Ultra Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/glacier-ultra-maison-alhambra-prix-maroc-430x430.webp",
      price: 250.99,
      notes: {
        tete: "Menthe, Eucalyptus",
        coeur: "Lavande, Sauge",
        fond: "Ambre, Musc"
      }
    },
    {
      id: 23,
      categorymarque: "rave", 
      category: "homme",
      titre: "Philos Centro Eau de Parfum",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/45984_3-430x430.jpg",
      price: 160.99,
      notes: {
        tete: "Pamplemousse, Gingembre",
        coeur: "Lavande, Géranium",
        fond: "Bois de cèdre, Vétiver"
      }
    },
    {
      id: 24,
      categorymarque: "rave", 
      category: "homme",
      titre: "Your Touch Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/your-touch-pour-homme-maison-alhambra-prix-maroc-430x430.webp",
      price: 220.99,
      notes: {
        tete: "Poire, Bergamote",
        coeur: "Rose, Iris",
        fond: "Patchouli, Musc"
      }
    },
    {
      id: 25,
      categorymarque: "rave", 
      category: "homme",
      titre: "Yes I Am The King Lattafa",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/yes-i-am-the-king-le-parfum-geparlys-au-maroc.webp",
      price: 349.00,
      notes: {
        tete: "Orange sanguine, Pamplemousse",
        coeur: "Lavande, Sauge",
        fond: "Ambre, Bois de santal"
      }
    },
    {
      id: 26,
      categorymarque: "rave", 
      category: "femme",
      titre: "Candid By Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/candid-by-maison-alhambra-pour-femme-430x430.webp",
      price: 219.00,
      notes: {
        tete: "Framboise, Cassis",
        coeur: "Rose, Magnolia",
        fond: "Vanille, Patchouli"
      }
    },
    {
      id: 27,
      categorymarque: "rave", 
      category: "femme",
      titre: "Narissa Poudree Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/narissa-poudree-maison-alhambra-pour-femme-au-maroc-430x430.webp",
      price: 199.99,
      notes: {
        tete: "Iris, Bergamote",
        coeur: "Jasmin, Rose",
        fond: "Patchouli, Musc"
      }
    },
    {
      id: 28,
      categorymarque: "rave", 
      category: "femme",
      titre: "Pride Maison Alhambra",
      image: "https://parfumstore.ma/wp-content/uploads/2024/04/pride-by-maison-alhambra-prix-maroc-430x430.webp",
      price: 190.99,
      notes: {
        tete: "Citron, Bergamote",
        coeur: "Jasmin, Lavande",
        fond: "Ambre, Cèdre"
      }
    }
  ]);
  

  

  


  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };


  const [cart, setCart] = useState([]);
  const [ ,setProducts] = useState([]);


  const onAddToCart = (product) => {
    setCart([...cart, product]);
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  

  const onRemoveFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div className="App">
      <Navbar setSearchQuery={setSearchQuery} cartCount={cart.length}/>
      {/* <HeroSection /> */}
      <Routes>
        <Route
          path="/parfums/homme"
          element={<Category products={products} category="homme" />}
        />
        <Route
          path="/parfums/femme"
          element={<Category products={products} category="femme" />}
        />
        <Route
          path="/parfums/unisex"
          element={<Category products={products} category="unisex" />}
        />
        <Route
          path="/marques/lattafa"
          element={<CategoryMarque products={products} categorymarque="lattafa" />}
        />
        <Route
          path="/marques/maison-alhambra"
          element={<CategoryMarque products={products} categorymarque="maison-alhambra" />}
        />
        <Route
          path="/marques/rave"
          element={<CategoryMarque products={products} categorymarque="rave" />}
        />
        <Route
          path="/"
          element={<ProductList products={products}  searchQuery={searchQuery}   onAddToCart={onAddToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} onAddToCart={onAddToCart}/>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard initialProducts={products} />} />
        <Route
          path="/panier"
          element={<Panier
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity} 
          />}
          
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/condition" element={<Condition />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
