import React from 'react';
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';

import RoomList from "./admin/RoomList";
import ReservationList from './admin/ReservationList';
import CreateRoom from "./admin/CreateRoom";
import CompanyReservationList from './company/CompanyReservationList';
import CreateReservation from './company/CreateReservation';
import CompanyList from './company/CompanyList';
import CreateCompany from './company/CreateCompany';

const App = () => {
    return(
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/admin" exact component={ReservationList} />
                    <Route path="/admin/rooms" exact component={RoomList} />
                    <Route path="/admin/room/new" exact component={CreateRoom} />
                    <Route path="/company/reservation" exact component={CompanyReservationList} />
                    <Route path="/reservation" exact component={CreateReservation} />
                    <Route path="/company" exact component={CompanyList} />
                    <Route path="/company/new" exact component={CreateCompany} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;