import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import emar_api from '../../apis/emar.js';

import NavigationBar from "./NavigationBar";
import "../../styles/admin/ReservationList.css";

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await emar_api.get('/emar/reservation/all');
            setReservations(response.data);
        })();
    }, []);

    return(
        <div>
            <NavigationBar/>
            <div className="container">
                <div id="admin-reservation-list">
                    <h1 id="admin-reservation-list-h1">Reservations</h1>
                    <Table responsive>
                        <thead id="admin-reservation-list-title">
                            <tr>
                                <th>Room</th>
                                <th>Company</th>
                                <th>Participant</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Extra</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody id="admin-reservation-list-body">
                            {renderList(reservations)}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

const renderList = (reservations) => {
    return reservations.map(reservation => {
        return(
            <tr key={reservation.id}>
                <td>
                    {reservation.room.name}
                </td>
                <td>
                    {reservation.company.name}
                </td>
                <td>
                    {reservation.company.memberCount}
                </td>
                <td>
                    {reservation.startDate}
                </td>
                <td>
                    {reservation.endDate}
                </td>
                <td>
                    {reservation.hasExtra ? <i className="far fa-check-square"></i> : <i className="far fa-times-circle"></i>}
                </td>
                <td>
                    {reservation.cost}
                </td>
            </tr>
        );
    });
};

export default ReservationList;