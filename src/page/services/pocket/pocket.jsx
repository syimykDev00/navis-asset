import React from 'react';
import {Link} from 'react-router-dom';

const Pocket = () => {
    return (
        <section id='pocket'>
            <div className='container'>
                <div className='pocket'>
                    <h1>Ваши деньги обратно в вашем кармане!</h1>
                    <div className='pocket--group'>
                        <p>Возьми свои финансы снова под контроль. 
                        Нажми на "Оставить заявку", чтобы получить помощь.</p>
                        <div>
                            <Link to={'/request'}>
                              <button>Оставить заявку</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pocket;