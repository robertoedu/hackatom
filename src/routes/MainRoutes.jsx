import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from '../pages/Produtos';
import { Login } from '../pages/Login';
import Lista from '../pages/Lista';
import PrivateRoute from '../components/Private';

export const MainRoutes = () => {
  return (
    <BrowserRouter basename="/hackatom">

      <Routes>
        <Route path="/" element={<Login />} />

      {/* Rotas Privadas, Verificacao de Id, atravez de Local Storage, 
      Pagina Cadastro de Produtos*/}

        <Route exact path="/hackatom/produtos/*" element={<PrivateRoute />}>
          <Route exact path="/hackatom/produtos/*"  element={<Produtos />} />
        </Route>

        {/* Rotas Privadas, Verificacao de Id, atravez de Local Storage, 
      Pagina visualizacao como lista de compras*/}

        <Route exact path="/hackatom/list/*" element={<PrivateRoute />}>
          <Route exact path="/hackatom/list/*" element={<Lista />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
};
