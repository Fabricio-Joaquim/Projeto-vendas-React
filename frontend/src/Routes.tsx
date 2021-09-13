import Dashboard from "pages/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
export default function Routes(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/" exact>
                        <Dashboard/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}