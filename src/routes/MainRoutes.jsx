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

        <Route exact path="/produtos/*" element={<PrivateRoute />}>
          <Route path="/produtos/*" exact element={<Produtos />} />
        </Route>

        <Route exact path="/list/*" element={<PrivateRoute />}>
          <Route exact path="/list/*" element={<Lista />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
};
