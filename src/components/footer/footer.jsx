import React from 'react';
import logo from './../../assets/img/logo.svg';
import {Link} from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer--general'>
                        <div className='footer--general__footerLogoGroup'>
                            <img src={logo} alt="img"/>
                            <p>Это международный сервис, где вам
                            быстро и надежно восстановят ваш забытый криптокошелёк</p>
                            <h2>navisasset@mail.com</h2>
                        </div>
                        <div className='footer--general__footerNavbarGroup'>
                            <h3>Основное</h3>
                            <nav className='footer--general__footerNavbarGroup--footerNavbar'>
                                <Link to={'/about'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>О нас</Link>
                                <Link to={'/contact'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>Контакты</Link>
                                <Link to={'/'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>Партнеры</Link>
                                <Link to={'/'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>Почему <br /> Navis Asset?</Link>
                            </nav>
                        </div>
                        <div className='footer--general__footerNavbarGroup'>
                            <h3>Пользователям</h3>
                            <nav className='footer--general__footerNavbarGroup--footerNavbar'>
                                <Link to={'/'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>Услуги</Link>
                                <Link to={'/reviews'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>Отзывы</Link>
                                <Link to={'/price'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>Прайс</Link>
                                <Link to={'/navis-news'} className='footer--general__footerNavbarGroup--footerNavbar__footerLink'>Новости</Link>
                            </nav>
                        </div>
                        <div className='footer--general__footerIconsGroup'>
                            <h3>Мы в соцсетях</h3>
                            <div className='footer--general__footerIconsGroup--footerIconic'>
                             <Link to={''} className='footer--general__footerIconsGroup--footerIconic__footerIcon'>
                              <IoLogoWhatsapp />
                            </Link>
                            <Link to={''} className='footer--general__footerIconsGroup--footerIconic__footerIcon'>
                              <RiTelegram2Fill />
                            </Link>
                             <Link to={''} className='footer--general__footerIconsGroup--footerIconic__footerIcon'>
                              <FaSquareInstagram />
                            </Link>
                            <Link to={''} className='footer--general__footerIconsGroup--footerIconic__footerIcon'>
                              <AiOutlineTikTok />
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className='container'>
                <div className='footerNewGroup'>
                    <p>© 2024 NavisAsset Все права защищены</p>
                    <h6>Made with ❤️ by <span>NavisDevs</span> </h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;