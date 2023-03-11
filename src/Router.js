import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav.js';
import Landing from './pages/Landing/LandingPage';
import Footer from './layout/Footer.js';
function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/culutre" element={<div>문화</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default Router;
