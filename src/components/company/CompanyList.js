import React, { useState, useEffect } from 'react';
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import { Table, Button, Col, Form } from 'react-bootstrap';
import emar_api from '../../apis/emar.js';

import NavigationBar from "./NavigationBar";
import "../../styles/admin/ReservationList.css";

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await emar_api.get('/emar/company/all');
            setCompanies(response.data);
        })();
    }, []);

    return(
        <div>
            <NavigationBar />
            {renderAddButton()}
            <div className="container">
                <div id="admin-reservation-list">
                    <h1 id="admin-reservation-list-h1">Companies</h1>
                    <Table responsive>
                        <thead id="admin-reservation-list-title">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>City</th>
                                <th>Member Count</th>
                            </tr>
                        </thead>
                        <tbody id="admin-reservation-list-body">
                            {renderList(companies)}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

const renderList = (companies) => {
    return companies.map(company => {
        return(
            <tr key={company.id}>
                <td>
                    {company.id}
                </td>
                <td>
                    {company.name}
                </td>
                <td>
                    {company.mail}
                </td>
                <td>
                    {company.city}
                </td>
                <td>
                    {company.memberCount}
                </td>
            </tr>
        );
    });
};

const renderAddButton = () => {
    return(
        <div className="container">
            <Link id="admin-room-list-add-button" to="/company/new">
                <i className="fas fa-plus button-icon"></i>
                Company
            </Link>
        </div>
    );
};

export default CompanyList;