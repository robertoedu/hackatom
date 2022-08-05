import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CadProduto } from '../pages/cadProdutos';
import { Login } from '../pages/Login';
import { PageList } from '../pages/PageList';
import PrivateRoute from '../components/Private';

export const MainRoutes = () => {
  return (
    <BrowserRouter basename="/hackatom">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/list" element={<PageList />} />
        <Route exact path="/cadastroProduto/*" element={<PrivateRoute />}>
          <Route path="/cadastroProduto/*" exact element={<CadProduto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
