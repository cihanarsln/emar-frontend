import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emar_api from '../../apis/emar.js';

import NavigationBar from "./NavigationBar";
import "../../styles/admin/ReservationList.css";

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await emar_api.get('/emar/room/all');
            setRooms(response.data);
        })();
    }, []);

    return(
        <div>
            <NavigationBar/>
            {renderAddButton()}
            {renderTable(rooms)}
        </div>
    );
};

const renderAddButton = () => {
    return(
        <div className="container">
            <Link id="admin-room-list-add-button" to="/admin/room/new">
                <i className="fas fa-plus button-icon"></i>
                Room
            </Link>
        </div>
    );
};

const renderTable = (rooms) => {
    return(
        <div className="container">
            <div id="admin-reservation-list">
                <h1 id="admin-reservation-list-h1">Rooms</h1>
                <Table responsive>
                    <thead id="admin-reservation-list-title">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Capacity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody id="admin-reservation-list-body">
                        {renderList(rooms)}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

const renderList = (rooms) => {
    return rooms.map(room => {
        return(
            <tr key={room.id}>
                <td>
                    {room.id}
                </td>
                <td>
                    {room.name}
                </td>
                <td>
                    {room.city}
                </td>
                <td>
                    {room.district}
                </td>
                <td>
                    {room.capacity}
                </td>
                <td>
                    {room.price}
                </td>
            </tr>
        );
    });
};

export default RoomList;