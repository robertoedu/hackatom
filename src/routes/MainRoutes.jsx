import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Produtos from '../pages/Produtos';
import { Login } from '../pages/Login';
import { PageList } from '../pages/PageList';
import PrivateRoute from '../components/Private';

export const MainRoutes = () => {
  return (
    <BrowserRouter basename="/hackatom">
      <SideBar>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route exact path="/produtos/*" element={<PrivateRoute />}>
            <Route path="/produtos/*" exact element={<Produtos />} />
          </Route>
          <Route exact path="/list" element={<PageList />} />

        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
