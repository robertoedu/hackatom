import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../components/SideBar';
import  Produtos  from '../pages/Produtos';
import { Login } from '../pages/Login';
import Lista from '../pages/Lista';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
