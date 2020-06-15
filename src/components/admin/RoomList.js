import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
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
            <div className="container">
                <div id="admin-reservation-list">
                    <h1 id="admin-reservation-list-h1">Rooms</h1>
                    <Table responsive>
                        <thead id="admin-reservation-list-title">
                            <tr>
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
        </div>
    );
};

const renderList = (rooms) => {
    return rooms.map(room => {
        return(
            <tr key={room.id}>
                <td>
                    {room.name}
                </td>
                <td>
                    {room.city}
                </td>
                <td>
                    {room.state}
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