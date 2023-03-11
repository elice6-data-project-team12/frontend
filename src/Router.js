import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav.js';
import Landing from './pages/Landing/LandingPage';
import Footer from './layout/Footer.js';
function Router() {
  return (
    <Provider store={store}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default Router;
