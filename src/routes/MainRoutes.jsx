import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { CadProduto } from '../pages/cadProdutos';
import { Login } from '../pages/Login';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastroProduto" element={<CadProduto />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
