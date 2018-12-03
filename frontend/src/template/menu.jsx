import React from 'react'

export default props => (

    <nav className="navbar navbar-inverse">
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-archive'></i> Processos
                </a>
            </div>
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/clientes'>Clientes</a></li>
                    <li><a href='#/varas'>Varas</a></li>
                    <li><a href='#/processos'>Processos</a></li>
                </ul>
            </div>
        </div>
    </nav>
)