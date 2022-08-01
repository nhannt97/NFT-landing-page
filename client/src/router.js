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

export const routers = [{
  path: '/',
  component: <Home />
}, {
  path: '/market-place',
  component: <MarketPlace />,
}, {
  path: 'about',
  component: <About />,
}, {
  path: '/building',
  component: <Building />,
}, {
  path: '/staking',
  component: <Staking />,
}, {
  path: '/team',
  component: <Team />,
}];

export default function routerRender() {
  return (
    <Router>
      <Routes>
        {routers.map((router) => (
          <Route path={router.path} key={router.path} element={router.component}>
          </Route>
        ))}
      </Routes>
    </Router >
  );
}
