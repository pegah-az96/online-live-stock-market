import React, {Component} from 'react';
import { Route , Switch } from "react-router-dom";
import Products from "./Products";
import App from "./App";

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/products" component={Products}/>
                    <Route path="/" component={App} exact={true}/>
                </Switch>
            </div>
        );
    }
}

export default Routes;