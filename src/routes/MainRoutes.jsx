import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CadProduto } from '../pages/cadProdutos';
import { Login } from '../pages/Login';

export const MainRoutes = () => {
  return (
    <BrowserRouter basename = "/hackatom">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastroProduto" element={<CadProduto />} />
      </Routes>
    </BrowserRouter>
  );
};
