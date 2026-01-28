import React from 'react';
import reviewsData from './reviewsData';
import { FaStar } from "react-icons/fa6";


const Reviews = () => {
    return (
        <section id='reviews'>
            <div className='container'>
                <div className='reviews'>
                    <h1>Отзывы довольных клиентов</h1>
                    <div className='reviews--general'>
                       {
                        reviewsData.map(item => (
                            <div className='reviews--general__block' key={item.id}>
                                <div className='reviews--general__block--iconTextBlockGroup'>
                                    <div className='reviews--general__block--iconTextBlockGroup__iconsGroup'>
                                    <FaStar className='reviews--general__block--iconTextBlockGroup__iconsGroup--iconYellow'/>
                                    <FaStar className='reviews--general__block--iconTextBlockGroup__iconsGroup--iconYellow'/>
                                    <FaStar className='reviews--general__block--iconTextBlockGroup__iconsGroup--iconYellow'/>
                                    <FaStar className='reviews--general__block--iconTextBlockGroup__iconsGroup--iconYellow'/>
                                    <FaStar className='reviews--general__block--iconTextBlockGroup__iconsGroup--iconSilver'/>
                                   </div>
                                   <p>{item.description}</p>
                                </div>
                                <div className='reviews--general__block--textGroup'>
                                    <div className='reviews--general__block--textGroup__userGroup'>
                                         <img src={item.user} alt="img"/>
                                    </div>
                                    <div className='reviews--general__block--textGroup'>
                                        <div className='reviews--general__block--textGroup__text'>
                                            <h3>{item.name}</h3>
                                            <h4>{item.date}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                       }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;