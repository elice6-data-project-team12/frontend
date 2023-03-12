import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav.js';
import Footer from './layout/Footer.js';
import Landing from './pages/Landing/LandingPage';
import Culture from './pages/Culture/CulturePage.js';

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
