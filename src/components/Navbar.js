import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import perfumeImage from '../assets/swiss-arabian.png';

const Navbar = ({ setSearchQuery, cartCount}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownParfums, setDropdownParfums] = useState(false);
  const [dropdownMarques, setDropdownMarques] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdownParfums = () => {
    setDropdownParfums(!dropdownParfums);
  };

  const toggleDropdownMarques = () => {
    setDropdownMarques(!dropdownMarques);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={perfumeImage} alt="Perfume Bottle" />
        </Link>
        {/* <h5>Arabian <br/> Essence</h5> */}
      </div>

      <div className="navbar-menu-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>

        <ul className='navbar-links'>
          <li 
            onMouseEnter={toggleDropdownParfums} 
            onMouseLeave={toggleDropdownParfums}>
            <Link to="/parfums">PARFUMS</Link>
            {dropdownParfums && (
              <ul className="dropdown">
                <li><Link to="/parfums/homme">Parfum Homme</Link></li>
                <li><Link to="/parfums/femme">Parfum Femme</Link></li>
                <li><Link to="/parfums/unisex">Parfum Unisexes</Link></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={toggleDropdownMarques} 
            onMouseLeave={toggleDropdownMarques}>
            <Link to="/marques">MARQUES</Link>
            {dropdownMarques && (
              <ul className="dropdown">
                <li><Link to="/marques/lattafa">Lattafa</Link></li>
                <li><Link to="/marques/maison-alhambra">Maison Alhambra</Link></li>
                <li><Link to="/marques/rave">Rave</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search Product"
            onChange={handleSearchChange}
          />
          <img
            className="search-icon"
            src="https://www.freeiconspng.com/uploads/search-icon-png-5.png"
            alt="search icon"
          />
        </div>
      </div>

      <ul className="user-icon">
        <li>
          <Link to="/login">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              alt="User"
            />
          </Link>
        </li>
        <li>
          <Link className='link' to="/panier">
            <img
              src="https://th.bing.com/th?q=Logo+Sac+De+Shopping+Panier&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-XA&cc=MA&setlang=fr&adlt=strict&t=1&mw=247"
              alt="Cart"
              className="cart-icon"
            />
            <span 
             style={{
              position: "fixed",
              top: "15px",
              right: "5px",
              backgroundColor: "red", 
              color: "black",
              fontSize: "12px", 
              padding: "3px 6px",
              borderRadius: "50%", 
              fontWeight: "bold", 
              border: "none",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            >({cartCount})</span>
          </Link>
        </li>
      </ul>
       {/* Sidebar (only visible when menu is open) */}
       <div className={`sidebar ${menuOpen ? 'active' : ''}`}>
        <button className="menu-close" onClick={toggleMenu}>
          &times; {/* Close icon */}
        </button>
        <ul className="sidebar-links">
        <li>
            <h5 className="link" to="/parfums">PARFUMS</h5> <hr/>
              <ul className="details">
                <li><Link to="/parfums/homme">Parfum Homme</Link></li>
                <li><Link to="/parfums/femme">Parfum Femme</Link></li>
                <li><Link to="/parfums/unisex">Parfum Unisexes</Link></li>
              </ul>
          </li>
          <li>
            <h5 className="link" to="/marques">MARQUES</h5> <hr/>
              <ul className="details">
                <li><Link to="/marques/lattafa">Lattafa</Link></li>
                <li><Link to="/marques/maison-alhambra">Maison Alhambra</Link></li>
                <li><Link to="/marques/rave">Rave</Link></li>
              </ul>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
