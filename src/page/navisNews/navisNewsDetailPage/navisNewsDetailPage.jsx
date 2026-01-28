import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

import newsData from '../../services/news/newsData';
import NavisNewsDetailPageData from './navisNewsDetailPageData';

const NavisNewsDetailPage = () => {
    const { id } = useParams();

    const newsItem = newsData.find(
        item => item.id === Number(id)
    );

    if (!newsItem) {
        return <h2>Новость не найдена</h2>;
    }

    return (
        <section id='navisDetailNews'>
            <div className='container'>
                <div className='navisDetailNews'>   

                    <div className="navisDetailNews--general">
  
  {/* ЛЕВАЯ КОЛОНКА */}
  <div className="navisDetailNews--general__groupOne">
    <Link to='/' className='navisDetailNews--general__groupOne--newsIcon'>
        <FaArrowLeft />
    </Link>
    {/* БОЛЬШАЯ НОВОСТЬ */}
    <div className="navisDetailNews--general__groupOne--cardLeft">
      <h2>{newsItem.title}</h2>
      <h4>{newsItem.date}</h4>
      <img src={newsItem.image} alt="img" />
      <h6>{newsItem.description}</h6>
    </div>

    {/* МИНИ-НОВОСТИ СНИЗУ */}
    {NavisNewsDetailPageData
      .filter(item => item.type === 'regularRight')
      .map(item => (
        <div
          key={item.id}
          className="navisDetailNews--general__groupOne--cardLeftMini"
        >
          <div className="navisDetailNews--general__groupOne--cardLeftMini__cardLeftMiniTextGroup">
            <div className="navisDetailNews--general__groupOne--cardLeftMini__cardLeftMiniTextGroup--cardLeftMiniText">
              <h3>{item.news}</h3>
              <h6>{item.description}</h6>
            </div>
          </div>
        </div>
      ))
    }
  </div>

  {/* ПРАВАЯ КОЛОНКА */}
  <div className="navisDetailNews--general__groupTwo">
    <h2>Читать также:</h2>

    {NavisNewsDetailPageData
      .filter(item => item.type === 'regular')
      .map(item => (
        <Link
         to={`/navis-news/detail-news/${item.id}`}
          key={item.id}
          className="navisDetailNews--general__groupTwo--cardRight"
        >
          <img src={item.image} alt="img" />
          <div className="navisDetailNews--general__groupTwo--cardRight__cardRightTextGroup">
            <div className="navisDetailNews--general__groupTwo--cardRight__cardRightTextGroup--cardRightText">
              <h3>{item.title}</h3>
              <h6>{item.date}</h6>
            </div>
            <Link
              to={`/navis-news/detail-news/${item.id}`}
              className="navisDetailNews--general__groupTwo--cardRight__cardRightTextGroup--cardRightIcon"
            >
              <MdOutlineArrowOutward />
            </Link>
          </div>
        </Link>
      ))
    }
  </div>
   
                     </div>
                </div>
            </div>
        </section>
    );
};

export default NavisNewsDetailPage;
