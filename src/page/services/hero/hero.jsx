import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import heroImage from '../../../assets/img/heroImage.png';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <section id='hero'>
            <div className='container'>
                <div className='hero'>
                    <div className='hero--block'>
                        <h1>Простое
                         и прозрачное восстановление кошелька</h1>
                         <p>Самый простой способ восстановить свой потерянный 
                            пароль от кошелька и расследовать обманутую криптовалюту</p>
                        <div className='hero--block__group'>
                            <Link to={'/request'}>
                              <button className='hero--block__group--btnOne'>Оставить заявку</button>
                            </Link>
                            <Link to={'/contact'}>
                              <button className='hero--block__group--btnTwo'>
                                Подробнее 
                                <MdOutlineArrowOutward  className='hero--block__group--btnTwo__btnIcon'/>
                             </button>
                            </Link>
                        </div>
                    </div>
                    <div className='hero--imageBlock'>
                        <img src={heroImage} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;