import React, { useState, useEffect } from 'react';
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import { Table, Button, Col, Form } from 'react-bootstrap';
import emar_api from '../../apis/emar.js';

import NavigationBar from "./NavigationBar";
import "../../styles/admin/ReservationList.css";

const CompanyReservationList = () => {
    const [reservations, setReservations] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await emar_api.get('/emar/reservation/all');
            setReservations(response.data);
        })();
    }, []);

    const findByCompanyId = (companyId) => {
        (async () => {
            const response = await emar_api.get(`/emar/reservation/company?id=${companyId}`);
            setReservations(response.data);
        })();
    }

    const findAll = () => {
        (async () => {
            const response = await emar_api.get(`/emar/reservation/all`);
            setReservations(response.data);
        })();
    }

    const formik = useFormik({
        initialValues: {
            companyId: ""
        },
        validationSchema: yup.object({
            companyId: yup.number().required('Required')
        }),
        onSubmit: values => {
            findByCompanyId(values.companyId);
          },
    });

    return(
        <div>
            <NavigationBar/>
            <div className="container">
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} xs="auto" controlId="validationFormik01">
                            <Form.Label>Company Id</Form.Label>
                            <Form.Control
                            type="text"
                            name="companyId"
                            placeholder=""
                            onChange={formik.handleChange}
                            value={formik.values.companyId}
                            onBlur={formik.handleBlur}
                            />
                            {formik.touched.companyId && formik.errors.companyId ? (
                                <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.companyId}</div>
                            ) : null}
                        </Form.Group>
                        <Button type="submit" style={{height: "40px", marginTop:"30px"}}>
                            <i className="fas fa-search"></i>
                        </Button>
                        <Button style={{height: "40px", width:"40px", margin:"30px 0 0 10px"}} onClick={()=>findAll()}>
                            <i className="fas fa-stream button-icon"></i>
                        </Button>
                        <Link id="admin-room-list-add-button" to="/reservation" style={{height: "40px", margin:"30px 0 0 30px"}}>
                            <i className="fas fa-plus button-icon"></i>
                            Rezervation
                        </Link>
                    </Form.Row>
                </Form>
            </div>
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

export default CompanyReservationList;