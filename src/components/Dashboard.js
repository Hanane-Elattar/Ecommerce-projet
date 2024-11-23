import React, { useState } from 'react';
import './dashboard.css';

const Dashboard = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      categorymarque: '',
      category: '',
      titre: 'Nouveau Produit',
      image: '',
      price: 0,
      notes: { tete: '', coeur: '', fond: '' },
    };
    setProducts([...products, newProduct]);
    setEditingProduct(newProduct);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (id, field, value) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, [field]: field === 'price' ? parseFloat(value) : value }
          : product
      )
    );
  };

  const handleImageChange = (e, product) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Crée une URL temporaire pour l'image
      handleEditProduct(product.id, 'image', imageURL); // Met à jour l'état de l'image du produit
    }
  };

  const handleSaveProduct = () => {
    setEditingProduct(null);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Tableau de Bord</h2>
        <ul>
          <li><a href="#overview">Vue d'ensemble</a></li>
          <li><a href="#products">Produits</a></li>
          <li><a href="#orders">Commandes</a></li>
          <li><a href="#users">Utilisateurs</a></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="dashboard-content">
        <h1>Tableau de Bord des Produits</h1>
        <button className="btn btn-add" onClick={handleAddProduct}>
          Ajouter un Produit
        </button>
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Catégorie</th>
              <th>Marque</th>
              <th>Titre</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  {editingProduct?.id === product.id ? (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, product)}
                      />
                      {product.image && (
                        <img src={product.image} alt={product.titre} className="product-img" />
                      )}
                    </>
                  ) : (
                    product.image ? (
                      <img src={product.image} alt={product.titre} className="product-img" />
                    ) : (
                      'Aucune image'
                    )
                  )}
                </td>
                <td>
                  {editingProduct?.id === product.id ? (
                    <input
                      type="text"
                      value={product.category}
                      onChange={(e) =>
                        handleEditProduct(product.id, 'category', e.target.value)
                      }
                    />
                  ) : (
                    product.category
                  )}
                </td>
                <td>
                  {editingProduct?.id === product.id ? (
                    <input
                      type="text"
                      value={product.categorymarque}
                      onChange={(e) =>
                        handleEditProduct(product.id, 'categorymarque', e.target.value)
                      }
                    />
                  ) : (
                    product.categorymarque
                  )}
                </td>
                <td>
                  {editingProduct?.id === product.id ? (
                    <input
                      type="text"
                      placeholder='text-input'
                      value={product.titre}
                      onChange={(e) =>
                        handleEditProduct(product.id, 'titre', e.target.value)
                      }
                    />
                  ) : (
                    product.titre
                  )}
                </td>
                <td>
                  {editingProduct?.id === product.id ? (
                    <input
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        handleEditProduct(product.id, 'price', e.target.value)
                      }
                    />
                  ) : (
                    `${product.price.toFixed(2)} MAD`
                  )}
                </td>
                <td>
                  {editingProduct?.id === product.id ? (
                    <button
                      className="btn btn-save"
                      onClick={handleSaveProduct}
                    >
                      Sauvegarder
                    </button>
                  ) : (
                    <button
                      className="btn btn-edit"
                      onClick={() => setEditingProduct(product)}
                    >
                      Modifier
                    </button>
                  )}
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
