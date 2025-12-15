import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import illustrationImg from '../../../assets/JoinWaitingList/illustration.png';
import './JoinWaitingList.css';
import './JoinWaitingList.mobile.css';


const JoinWaitingList = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        contactNo: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNotifyClick = () => {
        // Navigate to confirmation screen (we'll build this next)
        navigate('/waitlist-confirmation');
    };

    return (
        <div className="join-waitlist-page">
            <div className="waitlist-card">
                {/* Left Content Section */}
                <div className="waitlist-left-content">
                    <div className="waitlist-text-group">
                        <h1 className="waitlist-heading">
                            Join our<br />Waiting List
                        </h1>

                        <p className="waitlist-description">
                            Be a part of something truly extraordinary. Join thousands of others already gaining access to the future of buying and selling
                        </p>

                        <div className="waitlist-avatar-group">
                            <img
                                src="/JoinWaitingList/avatargroupcontainer.png"
                                alt="User avatars"
                                className="avatar-group-image"
                            />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="waitlist-form">
                        {/* First Row - Full Name and Contact No */}
                        <div className="form-row">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="form-input form-input-half"
                            />
                            <input
                                type="text"
                                name="contactNo"
                                placeholder="Contact No."
                                value={formData.contactNo}
                                onChange={handleInputChange}
                                className="form-input form-input-half"
                            />
                        </div>

                        {/* Second Row - Email and Notify Button */}
                        <div className="form-row">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email ID"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-input form-input-email"
                            />
                            <button
                                className="notify-button"
                                onClick={handleNotifyClick}
                            >
                                Notify me
                            </button>
                        </div>
                    </div>
                </div>

                {/* Illustration */}
                <img
                    src={illustrationImg}
                    alt="BUSEit character illustration"
                    className="waitlist-illustration"
                />
            </div>
        </div>
    );
};

export default JoinWaitingList;
