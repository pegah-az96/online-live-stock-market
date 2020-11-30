import React, {Component} from 'react';
import { Route , Switch } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/products" component={Products}/>
                    <Route path="/product/:id" component={Product}/>
                    <Route path="/" component={Home} exact={true}/>
                </Switch>
            </div>
        );
    }
}

export default App;