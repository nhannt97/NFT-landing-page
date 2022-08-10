import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/index';
import MarketPlace from './pages/market-place/index';
import About from './pages/about/index';
import Staking from './pages/staking/index';
import Term from './pages/term/index';
import Team from './pages/team/index';
import Guide from './pages/guide/index';
import LoadingScreen from "./layouts/loading-screen";
import DisClaim from "./pages/dis-claim";
import Privacy from "./pages/privacy";

export const routers = [{
  path: '/',
  component: <Home />,
  loadTime: 2
}, {
  path: '/market-place',
  component: <MarketPlace />,
}, {
  path: 'about',
  component: <About />,
}, {
  path: '/term',
  component: <Term />,
}, {
  path: '/dis-claim',
  component: <DisClaim />,
}, {
  path: '/privacy',
  component: <Privacy />,
}, {
  path: '/staking',
  component: <Staking />,
}, {
  path: '/team',
  component: <Team />,
}, {
  path: '/guide',
  component: <Guide />,
}];

export default function routerRender() {
  return (
    <Router>
      <Routes>
        {routers.map((router) => (
          <Route
            path={router.path}
            key={router.path}
            element={(
              router.loadTime ? (<LoadingScreen time={router.loadTime}>
                {router.component}
              </LoadingScreen>) : (router.component)
            )}
          >
          </Route>
        ))}
      </Routes>
    </Router >
  );
}
