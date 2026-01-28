import React from 'react';
import newsData from '../services/news/newsData';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavisNews = () => {
    return (
        <section id='navisNews'>
            <div className='container'>
                <div className='navisNews'>
                    <div className='navisNews--general'>

                        {/* БОЛЬШАЯ НОВОСТЬ */}
                        <div className='navisNews--general__groupOne'>
                            {newsData
                                .filter(item => item.type === 'featured')
                                .map(item => (
                                    <Link
                                        key={item.id}
                                        to={`/navis-news/detail-news/${item.id}`}
                                        className='navisNews--general__groupOne--cardLeft'
                                    >
                                        <img src={item.image} alt="img" />
                                        <div className='navisNews--general__groupOne--cardLeft__cardLeftTextGroup'>
                                            <div className='navisNews--general__groupOne--cardLeft__cardLeftTextGroup--cardLeftText'>
                                                <h2>{item.title}</h2>
                                                <p>{item.date}</p>
                                            </div>
                                            <div className='navisNews--general__groupOne--cardLeft__cardLeftTextGroup--cardLeftIcon'>
                                                <MdOutlineArrowOutward />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>

                        {/* СПИСОК СПРАВА */}
                        <div className='navisNews--general__groupTwo'>
                            {newsData
                                .filter(item => item.type === 'regular')
                                .map(item => (
                                    <Link
                                        key={item.id}
                                        to={`/navis-news/detail-news/${item.id}`}
                                        className='navisNews--general__groupTwo--cardRight'
                                    >
                                        <img src={item.image} alt="img" />
                                        <div className='navisNews--general__groupTwo--cardRight__cardRightTextGroup'>
                                            <div className='navisNews--general__groupTwo--cardRight__cardRightTextGroup--cardRightText'>
                                                <h3>{item.title}</h3>
                                                <h6>{item.date}</h6>
                                            </div>
                                            <div className='navisNews--general__groupTwo--cardRight__cardRightTextGroup--cardRightIcon'>
                                             <MdOutlineArrowOutward />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavisNews;
