import React from 'react';
import { BsFillGeoAltFill } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm()

  const onSubmit = async (data) => {
  const toastId = toast.loading('Отправка...');

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Ошибка сервера');
    }

    toast.success('Заявка отправлена!', { id: toastId });
    reset();
  } catch (error) {
    toast.error('Ошибка отправки', { id: toastId });
  }
};
    
    return (
        <section id='contact'>
            <div className='container'>
                <div className='contact'>
                    <div className='contact--blockOne'>
                        <h2>Техническая поддержка, сотрудничество и PR</h2>
                        <div className='contact--blockOne__contactIconGroup'>
                            <Link className='contact--blockOne__contactIconGroup--contactIcon'>
                            <BsFillGeoAltFill/>
                            </Link>
                            <h3>Кыргызская республика, г.Бишкек, Проспект Манаса 64/1</h3>
                        </div>
                        <div className='contact--blockOne__contactIconGroup'>
                            <Link className='contact--blockOne__contactIconGroup--contactIcon'>
                               <IoCallOutline />
                            </Link>
                            <nav>
                                <a href="#">+996 (502)-800-202</a> <br />
                                <a href="#">+996 (502)-800-202</a>
                            </nav>
                        </div>
                         <div className='contact--blockOne__contactIconGroup'>
                            <Link className='contact--blockOne__contactIconGroup--contactIcon'>
                               <MdOutlineMail />
                            </Link>
                            <h3>navisasset@mail.com</h3>
                        </div>
                        <h4>Мы в соцсетях</h4>
                        <div className='contact--blockOne__contactAppIconsGroup'>
                            <Link to={''} className='contact--blockOne__contactAppIconsGroup--contactAppIcon'>
                                <FaWhatsapp />
                            </Link>
                            <Link to={''} className='contact--blockOne__contactAppIconsGroup--contactAppIcon'>
                                <FaTelegramPlane />
                            </Link>
                            <Link to={''} className='contact--blockOne__contactAppIconsGroup--contactAppIcon'>
                                <FaInstagramSquare />
                            </Link>
                            <Link to={''} className='contact--blockOne__contactAppIconsGroup--contactAppIcon'>
                                <AiOutlineTikTok />
                            </Link>
                        </div>
                        <h6>Если у Вас возникли вопросы технического или финансового плана, 
                            напишите нам и мы поможем Вам в решении вашего вопроса. Мы отвечаем
                            на вопросы в течение 15-60 минут, в зависимости от загрузки сервиса.</h6>
                    </div>
                    <form className='contact--blockTwo' onSubmit={handleSubmit(onSubmit)}>
                        <div className='contact--blockTwo__group'>
                            <div className='contact--blockTwo__group--groupInput'>
                                <h2>Имя</h2>
                                <input 
                                {...register('name', {required: true})}
                                className={errors.name ? 'error': ''}
                                type="text" placeholder='Имя'
                                />
                            </div>
                            <div className='contact--blockTwo__group--groupInput'>
                                <h2>Фамилия</h2>
                                <input 
                                {...register('surname', {required: true})}
                                className={errors.surname ? 'error' : ''}
                                type="text" placeholder='Фамилия'
                                />
                            </div>
                        </div>
                        <div className='contact--blockTwo__selectGroup'>
                          <h3>Страна</h3>
                        <select 
                        {...register('country', {required: true})}
                        className={`contact--blockTwo__selectGroup--selectBlock ${
                            errors.country ? 'error' : ''
                        }`}>
                            <option value=''>Выберите страну</option>
                            <option value='Kg'>Кыргызстан</option>
                            <option value="Kz">Казахстан</option>
                            <option value="RU">Россия</option>
                              <option value="UZ">Узбекистан</option>
                        </select>
                        </div>
                        <div className='contact--blockTwo__group'>
                            <div className='contact--blockTwo__group--groupInput'>
                                <h2>Почта</h2>
                                <input 
                                {...register('email', {
                                    required: 'Введите email',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Неверный email',
                                    },
                                })}
                                className={errors.email ? 'error' : ''}
                                type="email" placeholder='Электронная почта'
                                />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div className='contact--blockTwo__group--groupInput'>
                                <h2>Номер телефона</h2>
                                <input 
                                {...register('phone', {
                                    required: true,
                                })}
                                className={errors.phone ? 'error' : ''}
                                type="tel" placeholder='+996 502 800 202'
                                />
                            </div>
                        </div>
                        <div className='contact--blockTwo__selectGroup'>
                          <h3>Тип восстановления</h3>
                        <select
                        {...register('recovery', {required: true})}
                        className={`contact--blockTwo__selectGroup--selectBlock ${
                            errors.recovery ? 'error' : ''
                        }`}
                        >
                            <option value=''>Выберите тип восстановления</option>
                            <option value="wallet_lost">Утерян доступ к кошельку</option>
                            <option value="password_reset">Сброс пароля</option>
                            <option value="transaction_problem">Проблема с транзакцией</option>
                            <option value="account_blocked">Аккаунт заблокирован</option>
                        </select>
                    </div>
                        <div className='contact--blockTwo__groupTwo'>
                            <div className='contact--blockTwo__groupTwo--groupSelectInput'>
                                <h2>Вид кошелька</h2>
                                <select 
                                {...register('view', {required: 'Вид кошелька обязательно!'})}
                                className={`contact--blockTwo__groupTwo--groupSelectInput__selectType ${
                                    errors.view ? 'error' : ''
                                }`}
                                >
                                    <option value="">Выберите вид кошелька</option>
                                    <option value="metamask">MetaMask</option>
                                    <option value="trustwallet">Trust Wallet</option>
                                    <option value="binance">Binance Wallet</option>
                                    <option value="okx">OKX Wallet</option>
                                    <option value="other">Другой</option>
                                </select>
                                {errors.view && <span>{errors.view.message}</span>}
                            </div>
                            <div className='contact--blockTwo__groupTwo--groupTwoInput'>
                                <h2>Объем кошелька</h2>
                                <input 
                                {...register('volume', {required: 'Обьем кошелька обязательно!'})}
                                className={errors.volume ? 'error' : ''}
                                type="text" placeholder='Объем кошелька'
                                />
                                {errors.volume && <span>{errors.volume.message}</span>}
                            </div>
                        </div>
                        <div className='contact--blockTwo__checkGroup'>
                            <input 
                            type="checkbox"
                            {...register('policy', {
                                required: true,
                            })}
                            />
                            <p>Нажимая на кнопку «Отправить заявку»,
                            я принимаю условия <span>Пользовательского соглашения</span> </p>
                        </div>
                        <button disabled={isSubmitting}>
                            {isSubmitting ? "Отправка..." : 'Отправить заявку'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;