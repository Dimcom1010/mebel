import React from 'react';
import './main.css';
import {Route, Switch} from "react-router";
import Home from "./Home";
import Obivka from "./main/Obivka";
import Peretiazka from "./main/Peretiazka";
import IndividualOrder from "./main/IndividualOrder";



const Main = ({...props}) => {
    return <>

        <div className="main__wrapper">
            <div className="main__content">
                <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route path="/Obivka" component={Obivka}/>
                    <Route path="/Peretiazka" component={Peretiazka}/>
                    <Route path="/IndividualOrder" component={IndividualOrder}/>

                </Switch>
            </div>

        </div>

    </>
}
export default Main