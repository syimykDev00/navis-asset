import React from 'react';
import navisAboutUser from '../../../assets/img/navisAboutUser.svg';
import navisAboutImageOne from '../../../assets/img/navisAboutImageOne.png';
import navisAboutImageTwo from '../../../assets/img/navisAboutImageTwo.png';

const NavisAbout = () => {
    return (
        <section id='navisAbout'>
            <div className='container'>
                <div className='navisAbout'>
                    <h1>О Navis Asset</h1>
                    <div className='navisAbout--generalOne'>
                        <div className='navisAbout--generalOne__group'>
                            <div className='navisAbout--generalOne__group--groupGeneral'>
                               <div className='navisAbout--generalOne__group--groupGeneral__blockOne'>
                                <img src={navisAboutUser} alt="img"/>
                                <div className='navisAbout--generalOne__group--groupGeneral__blockOne--blockOneText'>
                                    <h3>Основатель:</h3>
                                    <h2>Тилек <br /> Бегалиев</h2>
                                </div>
                             </div>
                             <div className='navisAbout--generalOne__group--groupGeneral__blockTwo'>
                                <h3>45+</h3>
                                <h4>Довольных клиентов</h4>
                             </div>
                            </div>
                            <div className='navisAbout--generalOne__group--blockThree'>
                                <h2>100%</h2>
                                <h3>Качественная работа</h3>
                            </div>
                        </div>
                        <img src={navisAboutImageOne} alt="img" className='navisAbout--generalOne__image'/>
                    </div>
                    <div className='navisAbout--generalTwo'>
                        <img src={navisAboutImageTwo} alt="img" className='navisAbout--generalTwo__image'/>
                        <div className='navisAbout--generalTwo__group'>
                            <div className='navisAbout--generalTwo__group--block'>
                                <h3>10+</h3>
                                <h4>Профессиональных <br /> сотрудников команды</h4>
                            </div>
                             <div className='navisAbout--generalTwo__group--block'>
                                <h3>Гарантия</h3>
                                <h4>Профессиональных <br /> сотрудников команды</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavisAbout;