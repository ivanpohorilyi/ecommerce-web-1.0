import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>House of stunt</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li>Донат на ЗСУ</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
