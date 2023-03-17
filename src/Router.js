import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav.js';
import Footer from './layout/Footer.js';
import Landing from './pages/Landing/LandingPage';
import Culture from './pages/Culture/CulturePage.js';
import Challenge from './pages/Challenge/ChallengePage.js';
import ChallengeDetailPage from './pages/Challenge/ChallengeDetailPage.js';
import ChallengeCreatePage from 'pages/Challenge/ChallengeCreatePage.js';

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/challenge/create" element={<ChallengeCreatePage />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route
            path="/challenge/detail/:id"
            element={<ChallengeDetailPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
