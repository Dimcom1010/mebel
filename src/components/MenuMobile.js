import React from 'react';
import './menu.css';



const Menu = ({...props}) => {
    return <>

        <div className="menu__wrapper">

            <div className="back_Logo"></div>
            <div className="menu__content">
                <div className="menu__logo">
                    <div className="logo__img"><b>MebelLink</b></div>
                    <div className="logo__text"><b>Мебельное ателье</b><br/> На рынке с 2007 года</div>
                </div>
                <div className="menu__contacts">
                    <div className="menu__contacts_phone">
                        <div className="phone_icon">icon</div>
                        <div className="phone_tel">
                            <div className="tel">+7 (499) 390-42-91</div>
                            <div className="tel">+7 (926) 141-96-33</div>
                            <div className="order_a_call">Заказать звонок</div>

                        </div>
                    </div>
                    <div className="menu__operatingMode">
                        <div className="operatingMode_icon">icon</div>
                        <div className="operatingMode_text">

                            Режим работы офиса: <br/>
                            ПН–ПТ: c 10:00 до 20:00<br/>
                            СБ: с 11:00 до 18:00<br/>
                            ВС: с 11:00 до 16:00<br/>
                            <br/>
                            Консультация по телефону:<br/>
                            ПН-ВС: с 09:00 до 21:00<br/>
                        </div>

                    </div>
                </div>
                <div className="menu__button my_button">Узнать цену</div>
                <div className="menu__items">
                    <div className="menu__item">
                        <div className="menu__item_icon">icon</div>
                        <div className="menu__item_text">Обивка мягкой мебели</div>
                    </div>
                    <div className="menu__item">
                        <div className="menu__item_icon">icon</div>
                        <div className="menu__item_text">Перетяжка мягкой мебели</div>
                    </div>
                    <div className="menu__item">
                        <div className="menu__item_icon">icon</div>
                        <div className="menu__item_text">Мебель по индивидуальным проектам</div>
                    </div>
                    <div className="menu__item">
                        <div className="menu__item_icon">icon</div>
                        <div className="menu__item_text">Катерная стяжка</div>
                    </div>
                    <div className="menu__item">
                        <div className="menu__item_icon">icon</div>
                        <div className="menu__item_text">Мебель для ресторанов, баров, кафе</div>
                    </div>
                    <div className="menu__item">
                        <div className="menu__item_icon">icon</div>
                        <div className="menu__item_text">Мягкая мебель для офиса</div>
                    </div>
                    <div className="menu__item">
                        <div className="menu__item_icon">icon</div>
                        <div className="menu__item_text">Работа с организациями(школы, медицинские учреждения, детские
                            сады)
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </>
}
export default Menu