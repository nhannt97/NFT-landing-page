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
import Building from './pages/building/index';
import Team from './pages/team/index';
import Guide from './pages/guide/index';
import LoadingScreen from "./layouts/loading-screen";

export const routers = [{
  path: '/',
  component: <Home />,
  loadTime: 2
}, {
  path: '/market-place',
  component: <MarketPlace />,
  loadTime: 2
}, {
  path: 'about',
  component: <About />,
  loadTime: 2
}, {
  path: '/building',
  component: <Building />,
  loadTime: 2
}, {
  path: '/staking',
  component: <Staking />,
  loadTime: 2
}, {
  path: '/team',
  component: <Team />,
  loadTime: 2
}, {
  path: '/guide',
  component: <Guide />,
  loadTime: 2
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
              <LoadingScreen time={router.loadTime}>
                {router.component}
              </LoadingScreen>
            )}
          >
          </Route>
        ))}
      </Routes>
    </Router >
  );
}
