import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
// common 
import { Loaders } from '../../components/common/CustomLoader';
// common components
const Navbar = lazy(() => import('../../components/layout/Navbar'));
//page
const Department = lazy(() => import('./Departments'));

const Home = () => {

    if (!sessionStorage.getItem('token')) {
        return (
            <Redirect to='/login' />
        )
    }
    return (
        <>
            <Suspense fallback={<Loaders/>}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <div className="container">
                            <div className="py-3">
                                <Department/>
                                {/* <Switch>
                                    <Route exact path="/" name='Home' />
                                    <Route exact path="/contacts" component={Contact} />
                                    <Route exact path="/contacts/add" component={AddContact} />
                                    <Route exact path="/contacts/edit/:id" component={EditContact} />
                                    <Redirect to='/' />
                                </Switch> */}
                            </div>
                        </div>
                    </div>
                </Router>
            </Suspense>
        </>
    )
}

export default Home;