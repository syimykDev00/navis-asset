import React from 'react';
import requestIconOne from '../../assets/img/requestIconOne.svg';
import requestIconTwo from '../../assets/img/requestIconTwo.svg';
import requestIconThree from '../../assets/img/requestIconThree.svg';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Request = () => {

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
        <section id='request'>
            <div className='container'>
                <div className='request'>
                    <div className='request--blockOne'>
                        <div className='request--blockOne__requestIconsGroup'>
                            <div className='request--blockOne__requestIconsGroup--requestIcon'>
                                <img src={requestIconOne} alt="img"/>
                            </div>
                            <div className='request--blockOne__requestIconsGroup--requestText'>
                                <h2>Доверенное восстановление кошелька</h2>
                                <p>Самое надежное имя в восстановлении цифровых активов с 2017 года.</p>
                            </div>
                        </div>
                        <div className='request--blockOne__requestIconsGroup'>
                            <div className='request--blockOne__requestIconsGroup--requestIcon'>
                                <img src={requestIconTwo} alt="img"/>
                            </div>
                            <div className='request--blockOne__requestIconsGroup--requestText'>
                                <h2>Безопасное недоступное хранилище</h2>
                                <p>Вся информация о кошельках и паролях зашифрована и хранится на оффлайн-серверах с воздушным зазором.</p>
                            </div>
                        </div>
                        <div className='request--blockOne__requestIconsGroup'>
                            <div className='request--blockOne__requestIconsGroup--requestIcon'>
                                <img src={requestIconThree} alt="img"/>
                            </div>
                            <div className='request--blockOne__requestIconsGroup--requestText'>
                                <h2>Начните совершенно бесплатно</h2>
                                <p>Гарантия без риска - вы нам не заплатите ни копейки, если мы не сможем восстановить ваш пароль.</p>
                            </div>
                        </div>
                    </div>
                    <form className='request--blockTwo' onSubmit={handleSubmit(onSubmit)}>
                        <div className='request--blockTwo__group'>
                            <div className='request--blockTwo__group--groupInput'>
                                <h2>Имя</h2>
                                <input 
                                {...register('name', {required: true})}
                                className={errors.name ? 'error': ''}
                                type="text" placeholder='Имя'
                                />
                            </div>
                            <div className='request--blockTwo__group--groupInput'>
                                <h2>Фамилия</h2>
                                <input 
                                {...register('surname', {required: true})}
                                className={errors.surname ? 'error' : ''}
                                type="text" placeholder='Фамилия'
                                />
                            </div>
                        </div>
                        <div className='request--blockTwo__selectGroup'>
                          <h3>Страна</h3>
                        <select 
                        {...register('country', {required: true})}
                        className={`request--blockTwo__selectGroup--selectBlock ${
                            errors.country ? 'error' : ''
                        }`}>
                            <option value=''>Выберите страну</option>
                            <option value='Kg'>Кыргызстан</option>
                            <option value="Kz">Казахстан</option>
                            <option value="RU">Россия</option>
                              <option value="UZ">Узбекистан</option>
                        </select>
                        </div>
                        <div className='request--blockTwo__group'>
                            <div className='request--blockTwo__group--groupInput'>
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
                            <div className='request--blockTwo__group--groupInput'>
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
                        <div className='request--blockTwo__selectGroup'>
                          <h3>Тип восстановления</h3>
                        <select
                        {...register('recovery', {required: true})}
                        className={`request--blockTwo__selectGroup--selectBlock ${
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
                        <div className='request--blockTwo__groupTwo'>
                            <div className='request--blockTwo__groupTwo--groupSelectInput'>
                                <h2>Вид кошелька</h2>
                                <select 
                                {...register('view', {required: 'Вид кошелька обязательно!'})}
                                className={`request--blockTwo__groupTwo--groupSelectInput__selectType ${
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
                            <div className='request--blockTwo__groupTwo--groupTwoInput'>
                                <h2>Объем кошелька</h2>
                                <input 
                                {...register('volume', {required: 'Обьем кошелька обязательно!'})}
                                className={errors.volume ? 'error' : ''}
                                type="text" placeholder='Объем кошелька'
                                />
                                {errors.volume && <span>{errors.volume.message}</span>}
                            </div>
                        </div>
                        <div className='request--blockTwo__checkGroup'>
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

export default Request;