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
            <div className="formBlock">
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
            </div>
            <FooterNav/>
        </div>
    )
}

export default ReviewsAll;
