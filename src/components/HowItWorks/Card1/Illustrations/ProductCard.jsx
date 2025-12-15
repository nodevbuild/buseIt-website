import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className="product-card-wrapper">
            <div className="product-card">
                {/* Product Image */}
                <div className="product-image-container">
                    <img
                        src="/assets/howitworksILLUSTRATIONS/card1/productcard/aestheticLamp.png"
                        alt="Aesthetic Lamp"
                        className="product-image"
                    />

                    {/* Badge with "3" */}
                    <div className="product-badge">
                        <span className="badge-number">3</span>
                    </div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                    {/* Price Section */}
                    <div className="price-section">
                        <span className="current-price">₹ 1200</span>
                        <span className="original-price">₹ 2400</span>
                    </div>

                    {/* Product Details */}
                    <div className="product-details">
                        <h3 className="product-name">Aesthetic Lamp</h3>

                        {/* Seller Info */}
                        <div className="seller-info">
                            <img
                                src="/assets/howitworksILLUSTRATIONS/card1/productcard/verifiedVector.svg"
                                alt="Verified"
                                className="verified-icon"
                            />
                            <span className="seller-name">Francis Gomes</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="product-actions">
                        <button className="add-to-cart-btn">Add to Cart</button>

                        <button className="like-btn">
                            <img
                                src="/assets/howitworksILLUSTRATIONS/card1/productcard/heartVector.svg"
                                alt="Like"
                                className="heart-icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
