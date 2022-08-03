import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';

export const MainRoutes = () => {
  return (
    <BrowserRouter basename = "/hackatom">
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
