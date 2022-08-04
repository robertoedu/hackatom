import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CadProduto } from '../pages/cadProdutos';
import { Login } from '../pages/Login';
import { PageList } from '../pages/PageList';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<PageList />} />
        <Route path="/cadastroProduto" element={<CadProduto />} />
      </Routes>
    </BrowserRouter>
  );
};
