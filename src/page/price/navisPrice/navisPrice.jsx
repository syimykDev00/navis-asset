import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const NavisPrice = () => {
    return (
        <section id='navisPrice'>
            <div className='container'>
                <div className='navisPrice'>
                    <div className='navisPrice--blockOne'>
                        <h2>Прайс</h2>
                        <p>Мы понимаем, что доверить нам ваши активы - это серьезное дело. Поэтому мы очень ответственно относимся к нашей работе по восстановлению ваших потерянных активов. Наша экспертиза и знания в области восстановления криптовалютных активов - это то, что отличает нас, и именно это позволяет нам взламывать пароли кошельков, чтобы вы могли вернуть свои активы.
                           Мы также знаем, что процесс восстановления криптовалютных активов часто включает в себя чувствительную личную и финансовую информацию, поэтому мы обрабатываем каждый случай с самым высоким уровнем безопасности и конфиденциальности.
                           За восстановление паролей мы берем комиссию в размере 20% от восстановленных токенов, что отражает ценность, которую мы приносим на стол, благодаря нашей экспертизе и безопасной обработке каждого случая.
                           И вот лучшая часть: наша услуга безопасна! Это означает, что вы платите нам только в случае успешного восстановления ваших активов. Если мы не можем взломать кошелек, вы не платите ни цента. Мы верим в то, что слова должны соответствовать делам, и поэтому мы уверены в наших способностях вернуть ваши активы.
                        </p>
                    </div>
                    <div className='navisPrice--blockTwo'>
                        <h2>Восстановление кошелька</h2>
                        <h3>25% <span>от кошелька</span> </h3>
                        <div className='navisPrice--blockTwo__navisIconGroup'>
                            <IoIosCheckmarkCircle className='navisPrice--blockTwo__navisIconGroup--icon'/>
                            <h4>Выделенный сотрудник службы поддержки</h4>
                        </div>
                         <div className='navisPrice--blockTwo__navisIconGroup'>
                            <IoIosCheckmarkCircle className='navisPrice--blockTwo__navisIconGroup--icon'/>
                            <h4>Время ответа в течение 24 часов</h4>
                        </div>
                          <div className='navisPrice--blockTwo__navisIconGroup'>
                            <IoIosCheckmarkCircle className='navisPrice--blockTwo__navisIconGroup--icon'/>
                            <h4>Опциональная консультация в Zoom</h4>
                        </div>
                         <div className='navisPrice--blockTwo__navisIconGroup'>
                            <IoIosCheckmarkCircle className='navisPrice--blockTwo__navisIconGroup--icon'/>
                            <h4>Профессиоанальная команда</h4>
                        </div>
                        <div className='navisPrice--blockTwo__navisIconGroup'>
                            <IoIosCheckmarkCircle className='navisPrice--blockTwo__navisIconGroup--icon'/>
                            <h4>Индивидуальная разработка</h4>
                        </div>
                        <button>Начать восстановление</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavisPrice;