import React from "react";
import choiceImgOne from '../../../assets/img/choiceImgOne.svg';
import choiceImgTwo from '../../../assets/img/choiceImgTwo.svg';
import choiceImgThree from '../../../assets/img/choiceImgThree.svg';

const Choice = () => {
    return (
        <section id="choice">
            <div className="container">
                <div className="choice">
                    <h1>Почему выбирают Navis Asset?</h1>
                    <div className="choice--general">
                        <div className="choice--general__blockOne">
                            <p>Наша панель пользователя позволяет 
                             вам загружать данные в любое время</p>
                             <h2>Восстановим ваш заблокированный кошелёк</h2>
                             <img src={choiceImgOne} alt="img"/>
                        </div>
                        <div className="choice--general__blockTwo">
                            <p>Гарантируем, что резервная копия зашифрованного
                              кошелька будет хнариться в сервере</p>
                             <h2>Ваш кошелёк будет защищен воздушной прослойкой</h2>
                             <img src={choiceImgTwo} alt="img"/>
                        </div>
                        <div className="choice--general__blockThree">
                            <p>Наша панель пользователя позволяет 
                             вам загружать данные в любое время</p>
                             <h2>Ваш забытый пароль будет восстановлен</h2>
                             <img src={choiceImgThree} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choice;