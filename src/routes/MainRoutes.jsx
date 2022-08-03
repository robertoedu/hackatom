import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CadProduto } from '../pages/cadProdutos';
import { Login } from '../pages/Login';
import { PageList } from '../pages/PageList';

export const MainRoutes = () => {
  return (
    <BrowserRouter basename = "/hackatom">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastroProduto" exact element={<CadProduto />} />
        <Route path="/list" element={<PageList />} />
      </Routes>
    </BrowserRouter>
  );
};
