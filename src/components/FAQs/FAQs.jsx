import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQs.css';
import './FAQs.mobile.css';


const FAQs = () => {
    const [activeTab, setActiveTab] = useState('buyers');
    const [expandedItem, setExpandedItem] = useState(null);

    const buyersFAQs = [
        {
            id: 1,
            title: "How do I buy an item?",
            description: "You can buy an item by clicking the \"Buy Now\" button (present on each listing detail page.) You will need to add your shipping address (currently shipping in Gurgaon only), select a payment method (Online or via Cash on Delivery), click on the \"Place Order\" button and then the order is booked."
        },
        {
            id: 2,
            title: "What is BUSEit Assured?",
            description: "It's our promise of trust and quality. With BUSEit Assured, you get: Verified quality: We inspect every item ourselves before it reaches you. Assured delivery & payment: No scams, no surprises. We manage everything securely. Easy returns: Found undisclosed damage? You can request a return within 48 hours of delivery."
        },
        {
            id: 3,
            title: "What if the product isn't as described?",
            description: "We check every item during pick-up. But if something still slips through, you can raise a return request within 48 hours of delivery. For our detailed Return Policy, please check here."
        },
        {
            id: 4,
            title: "How do I pay? Is it safe?",
            description: "Yes, it's 100% safe. You can pay online or Cash on delivery. We release the payout to the seller only after you confirm there are no issues with the order (within 48 hours of delivery)"
        },
        {
            id: 5,
            title: "When will I receive my order?",
            description: "We aim to deliver within 72 hours of placing the order - contingent on seller availability . If it isn't possible to deliver within 72 hours, we will let you know and give you the option of cancelling the order with 100% refund."
        },
        {
            id: 6,
            title: "What if I have more questions?",
            description: "We are there to help you with any further questions, details about the listing, listing's photo/video. Just Whatsapp us at +91 83485 23792 You can also click on the \"Chat with us\" button (present on each listing detail page.)"
        }
    ];

    const sellersFAQs = [
        {
            id: 1,
            title: "How do I list an item for sale?",
            description: "Simply click on the 'Sell' button, upload clear photos of your item, add a detailed description, set your price, and submit. You can also use our Buse AI feature to auto-fill details by just uploading a photo or video of your item."
        },
        {
            id: 2,
            title: "When do I receive payment?",
            description: "Your payment is held in secure escrow and released to you 48 hours after successful delivery to the buyer, provided there are no quality issues. This ensures both you and the buyer are protected."
        },
        {
            id: 3,
            title: "What happens during pickup?",
            description: "Our team will visit your location at the scheduled time, inspect the item to verify it matches your listing description, take professional photos if needed, and safely transport it. We handle everything - you just hand over the item."
        },
        {
            id: 4,
            title: "Do I need to meet the buyer?",
            description: "No! That's the beauty of BUSEit. We handle all pickups, quality checks, delivery, and payments. You never have to negotiate, meet strangers, or worry about scams. Just list your item and we take care of the rest."
        },
        {
            id: 5,
            title: "What if the buyer returns the item?",
            description: "If a buyer raises a valid return request within 48 hours due to undisclosed damage or quality issues, we'll verify the claim. If valid, the item is returned to you and the transaction is cancelled. If the return is invalid, you still get paid."
        },
        {
            id: 6,
            title: "How are items priced and what are the fees?",
            description: "You set your own price. BUSEit charges a small service fee only when your item sells successfully. There are no listing fees or hidden charges. You can also use our Smart AI pricing suggestions to set competitive prices based on market demand."
        }
    ];

    const currentFAQs = activeTab === 'buyers' ? buyersFAQs : sellersFAQs;

    const toggleItem = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <section id="faqs" className="faqs-section">
            <div className="faqs-container">
                {/* Pill Badge - Centered at top */}
                <div className="section-pill-faqs">
                    <span className="pill-text-faqs">Frequently asked Question</span>
                </div>

                {/* Content Row: Left and Right Columns */}
                <div className="faq-content-row">
                    {/* Left Column: Toggle + Accordion */}
                    <div className="faq-left-column">
                        {/* Toggle Slider */}
                        <div className="toggle-slider">
                            <div className={`slider-pill ${activeTab === 'buyers' ? 'left' : 'right'}`}></div>
                            <button
                                className={`toggle-option ${activeTab === 'buyers' ? 'active' : ''}`}
                                onClick={() => setActiveTab('buyers')}
                            >
                                For Buyers
                            </button>
                            <button
                                className={`toggle-option ${activeTab === 'sellers' ? 'active' : ''}`}
                                onClick={() => setActiveTab('sellers')}
                            >
                                For Sellers
                            </button>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="faq-accordion">
                            {currentFAQs.map((faq, index) => (
                                <React.Fragment key={faq.id}>
                                    <div className={`faq-item ${expandedItem === faq.id ? 'expanded' : ''}`}>
                                        <button
                                            className="faq-question"
                                            onClick={() => toggleItem(faq.id)}
                                        >
                                            <span>{faq.title}</span>
                                            <img
                                                src={expandedItem === faq.id ? "/assets/faqs/up.svg" : "/assets/faqs/down.svg"}
                                                alt={expandedItem === faq.id ? "Collapse" : "Expand"}
                                                className="faq-icon"
                                            />
                                        </button>
                                        {expandedItem === faq.id && (
                                            <div className="faq-answer">
                                                <p>{faq.description}</p>
                                            </div>
                                        )}
                                    </div>
                                    {index < currentFAQs.length - 1 && (
                                        <div className="faq-separator"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Mobile CTA Button - Shows below accordion on mobile */}
                        <Link to="/join-waitlist" className="faq-cta-pill">
                            <span className="faq-cta-text">Still need help? Talk to us →</span>
                        </Link>
                    </div>

                    {/* Right Column: Heading + Description + CTA */}
                    <div className="faq-right-content">
                        <h2 className="faq-right-heading">
                            Got Questions? <span className="faq-heading-bold">We've Got Answers.</span>
                        </h2>

                        <p className="faq-right-description">
                            Whether you're buying your first item or selling something you no longer need, these FAQs will help you get started smoothly.
                        </p>

                        <a href="#contact" className="faq-cta-pill">
                            <span className="faq-cta-text">Still need help? Talk to us →</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
