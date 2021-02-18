import {useSelector} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import EditUser from './pages/EditUser/EditUser';
import HomePage from './pages/HomePage/HomePage';

const Router = () => {
    const {isLoggedIn} = useSelector((state: any) => state.login);

    const routes = (!isLoggedIn && !localStorage.getItem('token')) ?
        <Switch>
            <Auth/>
        </Switch> :
        <Switch>
            <Route path="/home" exact>
                <HomePage/>
            </Route>
            <Route path="/edit/:userId" exact>
                <EditUser/>
            </Route>
            <Redirect to="/home"/>
        </Switch>
    ;

    return (
        <BrowserRouter>
            <main style={{width: '100%', height: '100%'}}>
                {routes}
            </main>
        </BrowserRouter>
    )
}

export default Router;
