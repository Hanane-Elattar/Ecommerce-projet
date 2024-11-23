import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import 'font-awesome/css/font-awesome.min.css';
import './ProductList.css';



const ProductList = ({ products, searchQuery, onAddToCart }) => {
  console.log("Received products:", products); 
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.titre.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  // Set products per page to 8
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Handle product click for navigating to details
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (

    <div className="product-list">
      <HeroSection/>
      {currentProducts.length > 0 ? (
        currentProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.titre} />
            <h3>{product.titre}</h3>
            <p>{product.price} MAD</p>

            <button
              className="add-button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
            >
              <i className="fa fa-shopping-cart"></i> {/* Cart icon */}
              Ajouter au panier
            </button>

          </div>
        ))
      ) : (
      <p className="aucun">Aucun produit trouvé.</p>
      )}

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-number ${index + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
