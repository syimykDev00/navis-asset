import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';
import headerFlag from '../../assets/img/headerFlag.svg';
import { useLocation } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const location = useLocation();
    const {t, i18n} = useTranslation()

    const changeLang = (e) => {
      i18n.changeLanguage(e.target.value)
    }

      useEffect(() => {
      setBurgerOpen(false);
      }, [location.pathname]);
  
    return (
      <>
        <header id='header'>
          <div className='container'>
            <div className='header'>
                <div className='header__left'>
                    {/* БУРГЕР — СЛЕВА ДО ЛОГО */}
                   <div className="burger" onClick={() => setBurgerOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <img src={logo} alt="img"/>
                </div>
  
              <nav className='header--navbar'>
                <Link to='/' className='header--navbar__link'>{t('services')}</Link>
                <Link to='/price' className='header--navbar__link'>{t('price')}</Link>
                <Link to='/reviews' className='header--navbar__link'>{t('reviews')}</Link>
                <Link to='/about' className='header--navbar__link'>{t('about')}</Link>
                <Link to='/contact' className='header--navbar__link'>{t('contact')}</Link>
              </nav>
  
              <div className='header--group'>
                <div className='header--group__block'>
                  <img src={headerFlag} alt="img"/>
                  <select 
                  value={i18n.language}
                  onChange={changeLang}
                  className='header--group__block--langSelect'>
                    <option value='ru'>Рус</option>
                    <option value='en'>Eng</option>
                  </select>
                </div>
                <button>{t('start')}</button>
              </div>
  
            </div>
          </div>
        </header>
  
        {/* МОДАЛЬНОЕ БУРГЕР-МЕНЮ */}
        {burgerOpen && (
          <div className="burger-overlay" onClick={() => setBurgerOpen(false)}>
            <div className="burger-modal" onClick={e => e.stopPropagation()}>

            <div className="burger-modal__top">
                 <span className="close" onClick={() => setBurgerOpen(false)}>✕</span>

                 <div className="lang-block">
                    <img src={headerFlag} alt="img" />
                     <select 
                     value={i18n.language}
                     onChange={changeLang}
                     className="lang-block__select">
                          <option value='ru'>Рус</option>
                          <option value='en'>Eng</option>
                   </select>
              </div>
          </div>
  
              <nav className="burger-modal__nav">
                <Link to="/">{t('services')}</Link>
                <Link to="/price">{t('price')}</Link>
                <Link to="/reviews">{t('reviews')}</Link>
                <Link to="/about">{t('about')}</Link>
                <Link to="/contact">{t('contact')}</Link>
              </nav>

            </div>
          </div>
        )}
      </>
    )
  }
  
  export default Header;