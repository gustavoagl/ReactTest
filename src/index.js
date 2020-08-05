import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home';
import CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';

const Pagina404 = () => (<div>Error404</div>)

ReactDOM.render(
<BrowserRouter>
<Switch>
  <Route path="/" component={Home} exact/>
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route path="/cadastro/categoria" component={CadastroCategoria} />
  <Route component={Pagina404}/>
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

