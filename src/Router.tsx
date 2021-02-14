import { useSelector } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import EditUser from './pages/EditUser/EditUser';
import HomePage from './pages/HomePage/HomePage';
const Router = () => {
    const login = useSelector((state: any) => state.login);
    
    let routes = !login?.isLoggedIn ? 
        <Switch>
            <Auth />
        </Switch> : 
        <Switch>
            <Route path="/home" exact>
                <HomePage />
            </Route>
            <Route path="/edit/:userId" exact render={(props) => <EditUser {...props}/>} />
            <Redirect to="/home" />
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