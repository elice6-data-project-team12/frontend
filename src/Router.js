import { Provider } from "react-redux";
import store from './store.js'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';

function Router(){
    return (
          <Provider store={store}>
            <Header />
            {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={< />} />
              </Routes>
            </BrowserRouter> */}
          </Provider>
    )
}

export default Router;