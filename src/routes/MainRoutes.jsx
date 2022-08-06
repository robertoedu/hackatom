import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../components/SideBar';
import  Produtos  from '../pages/Produtos';
import { Login } from '../pages/Login';
import { PageList } from '../pages/PageList';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/list" element={<PageList />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
