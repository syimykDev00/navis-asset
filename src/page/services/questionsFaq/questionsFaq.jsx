import React, { useState} from 'react';

const questionsFaqData = [
    {
        id: 1,
        questions: 'Как это все работает?',
        answer: 
        'Методы, которые мы используем для восстановления учетных записей наших клиентов, сильно различаются в зависимости от конкретного случая. В случае восстановления пароля мы проводим наших клиентов через извлечение резервной копии зашифрованного закрытого ключа и составление полного списка возможных вариантов паролей...'
    },
    {
        id: 2,
        questions: 'Я должен ли вам сказать свой пароль полностью',
        answer: 'Нет. Мы никогда не просим полный пароль или seed-фразу.'
    },
    {
        id: 3,
        questions: 'Сколько времени занимает восстановление кошелька?',
        answer: 'Все операции выполняются на защищенных серверах без доступа к средствам.'
    },
    {
        id: 4,
        questions: 'Как я могу вам довериться, вы не украдете мои деньги?',
        answer: 'Мы работаем с большинством популярных криптокошельков.'
    },
    {
        id: 5,
        questions: 'Какие виды криптовалютных кошельков вы восстановливаете?',
        answer: 'Мы работаем с большинством популярных криптокошельков.'
    }
];

const QuestionsFaq = () => {
    const [activeId, setActiveId] = useState(null);
    
    const toggle = (id) => {
        setActiveId(activeId === id ? null : id);
    }

    return (
        <section id='questionsFaq'>
            <div className='container'>
                <h2 className='questionsFaq__title'>Ответы на часто задаваемые вопросы</h2>
                <div className='questionsFaq'>
                    {questionsFaqData.map(item => (
                        <div key={item.id}
                        className={`questionsFaq__item ${activeId === item.id ? 'active' : ''}`}
                        >
                          <div className='questionsFaq__questions' onClick={() => toggle(item.id)}>
                            <span>{item.questions}</span>
                            <div className='questionsFaq__icon'>
                                {activeId === item.id ? '-' : '+'}
                            </div>
                          </div>
                          <div className='questionsFaq__answer'>
                            <p>{item.answer}</p>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QuestionsFaq;