import React from 'react';
import newsData from './newsData';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <section id='news'>
            <div className='container'>
                <div className='news'>
                    <h1>Новости</h1>

                    <div className='news--general'>

                        {/* БОЛЬШАЯ НОВОСТЬ */}
                        <div className='news--general__groupOne'>
                            {newsData
                                .filter(item => item.type === 'featured')
                                .map(item => (
                                    <Link
                                        key={item.id}
                                        to={`/navis-news/detail-news/${item.id}`}
                                        className='news--general__groupOne--cardLeft'
                                    >
                                        <img src={item.image} alt="img" />
                                        <div className='news--general__groupOne--cardLeft__cardLeftTextGroup'>
                                            <div className='news--general__groupOne--cardLeft__cardLeftTextGroup--cardLeftText'>
                                                <h2>{item.title}</h2>
                                                <p>{item.date}</p>
                                            </div>
                                            <div className='news--general__groupOne--cardLeft__cardLeftTextGroup--cardLeftIcon'>
                                                <MdOutlineArrowOutward />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>

                        {/* СПИСОК СПРАВА */}
                        <div className='news--general__groupTwo'>
                            {newsData
                                .filter(item => item.type === 'regular')
                                .map(item => (
                                    <Link
                                        key={item.id}
                                        to={`/navis-news/detail-news/${item.id}`}
                                        className='news--general__groupTwo--cardRight'
                                    >
                                        <img src={item.image} alt="img" />
                                        <div className='news--general__groupTwo--cardRight__cardRightTextGroup'>
                                            <div className='news--general__groupTwo--cardRight__cardRightTextGroup--cardRightText'>
                                                <h3>{item.title}</h3>
                                                <h6>{item.date}</h6>
                                            </div>
                                            <div className='news--general__groupTwo--cardRight__cardRightTextGroup--cardRightIcon'>
                                             <MdOutlineArrowOutward />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                      <Link to={"/navis-news"}>
                          <button className="news--newsBtn">
                           Подробнее
                          <MdOutlineArrowOutward className="news--newsBtn__newsBtnIcon" />
                           </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default News;
