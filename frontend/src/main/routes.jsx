import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Clientes from '../clientes/clientes'
import Varas from '../varas/varas'
import Processos from '../processos/processos'

export default props => (
    <Router history={hashHistory}>
        <Route path='/clientes' component={Clientes} />
        <Route path='/varas' component={Varas} />
        <Route path='/processos' component={Processos} />
        <Redirect from='*' to='/clientes' />
    </Router>
)