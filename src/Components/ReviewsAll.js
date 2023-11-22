import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import FooterNav from './FooterNav';
import PortfolioNav from './PortfolioNav';

const ReviewsAll  = ()=> {
    const { reviews } = useSelector(state => state)
    
    return (
        <div>
            <PortfolioNav/>
            <h2>Read Our Reviews!</h2>
                {/* <div className="formBlock">
                    <div className="form">
                        <ul>
                            {
                                reviews.map( review => {
                                    return (
                                        <li>
                                        Subject: {review.subject}<br/>
                                        Description:  {review.description}<br/>
                                            Rating: {review.rating}<br/><br/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div> */}
                <div className="formBlock">
                <div className="form">
                    <ul className='flex-col items-center justify-center'>
                        {
                            reviews.map( review => {
                                return (
                                    <li>
                                        <div className="card">
                                            <div className="card-front">
                                                <p className="title">{review.subject}</p>
                                                <p className="subtitle">{review.rating}</p>
                                            </div>
                                            <div className="card-back">
                                                <p>{review.description}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* <div className="book">
                <p className="bookp">Hello</p>
                <div class="cover">
                    <p className="bookp">Hover Me</p>
                </div>
            </div> */}
            {/* <div class="card">
                <div class="card-front">
                    <p class="title">John Doe</p>
                    <p class="subtitle">Web Dev</p>
                </div>
                <div class="card-back">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div> */}
            <FooterNav/>
        </div>
    )
}

export default ReviewsAll;
