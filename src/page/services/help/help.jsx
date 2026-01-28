import React from 'react';
import helpIconOne from '../../../assets/img/helpIconOne.svg';
import helpIconTwo from '../../../assets/img/helpIconTwo.svg';
import helpIconThree from '../../../assets/img/helpIconThree.svg';
import helpIconFour from '../../../assets/img/helpIconFour.svg';


const Help = () => {
    return (
        <section id='help'>
            <div className='container'>
                <div className='help'>
                    <h1>Мы поможем вам, если</h1>
                    <div className='help--general'>
                        <div className='help--general__block'>
                            <div className='help--general__block--blockIcon'>
                                <img src={helpIconOne} alt="img"/>
                            </div>
                            <h2>Если ваш пароль не работает</h2>
                            <p>Вы думали, что знаете свой пароль, но теперь он не разблокирует ваш 
                             кошелек. Возможно, в нем используются другие цифры или другая
                             заглавная буква, чем вы помните.</p>
                        </div>
                         <div className='help--general__block'>
                            <div className='help--general__block--blockIcon'>
                                <img src={helpIconTwo} alt="img"/>
                            </div>
                            <h2>Частичное восстановление исходной фразы</h2>
                            <p>Вы записали список слов, а парольная фраза - это некая комбинация этих слов.</p>
                        </div>
                         <div className='help--general__block'>
                            <div className='help--general__block--blockIcon'>
                                <img src={helpIconThree} alt="img"/>
                            </div>
                            <h2>Потеряли доступ к кошельку крупной сети</h2>
                            <p>Вы потеряли доступ к обычному криптоактиву, такому как Bitcoin, Ethereum, Litecoin, Dogecoin, NFT или десяткам других альткоинов</p>
                        </div>
                            <div className='help--general__block'>
                            <div className='help--general__block--blockIcon'>
                                <img src={helpIconFour} alt="img"/>
                            </div>
                            <h2>Вас обманули <br /> мошенники</h2>
                            <p>Мы предлагаем услуги по розыску (а не по взысканию) для тех, кто хочет построить свое дело и, возможно, раскрыть реальную личность мошенника.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help;