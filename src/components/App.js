import React from 'react';
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';

import RoomList from "./admin/RoomList";
import ReservationList from './admin/ReservationList';

const App = () => {
    return(
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/admin" exact component={ReservationList} />
                    <Route path="/admin/rooms" exact component={RoomList} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;