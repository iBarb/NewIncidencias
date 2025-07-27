import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router';
import FaceVerification from '../Pages/FaceVerification';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import ListaIncidencias from '../Pages/incidencias/ListaIncidencias';
import Layout from '../Pages/Layout';
import LayoutIncidencias from '../Pages/incidencias/LayoutIncidencias';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/verificacion" element={<PublicRouter element={<FaceVerification />} />} />
        <Route path="/" element={<PrivateRouter element={<Layout />} />}>
          <Route path="/" element={<LayoutIncidencias />} />
          <Route path="/nueva" element={<Number />} />
          <Route path="/perfil" element={<ListaIncidencias />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter