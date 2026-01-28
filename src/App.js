import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Services from './page/services/services';
import Price from './page/price/price';
import Reviews from './page/reviews/reviews';
import About from './page/about/about';
import Contact from './page/contact/contact';
import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Request from './page/request/request';
import NavisNews from './page/navisNews/navisNews';
import NavisNewsDetailPage from './page/navisNews/navisNewsDetailPage/navisNewsDetailPage';

const App = () => {
  return (
    <>
    <Toaster position='top-right'/>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Services/>}/>
      <Route path={'/navis-news'} element={<NavisNews/>}/>
      <Route path={'/navis-news/detail-news/:id'} element={<NavisNewsDetailPage/>}/>
      <Route path={'/request'} element={<Request/>}/>
      <Route path={'/price'} element={<Price/>}/>
      <Route path={'/reviews'} element={<Reviews/>}/>
      <Route path={'/about'} element={<About/>}/>
      <Route path={'/contact'} element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;