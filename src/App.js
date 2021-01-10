import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// css
import './styles/App.scss';
// common 
import { Loaders } from './components/common/CustomLoader';
// react-query
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

// pages
const Login = lazy(() => import('./pages/Auth/Login'));
const Home = lazy(() => import('./pages/Home'));

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loaders/>}>
        <Router>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  {/* <Route exact path="/logout" component={Logout} /> */}
                  <Route exact path="/" component={Home} />
                </Switch>
        </Router>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;