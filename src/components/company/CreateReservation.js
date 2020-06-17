import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Form, Col, Button} from 'react-bootstrap';

import emar_api from '../../apis/emar.js';
import NavigationBar from './NavigationBar';

const CreateReservation = () => {

    const formik = useFormik({
        initialValues: {
            roomId: "",
            companyId: "",
            startDate: "",
            endDate: "",
            hasExtra: false,
        },
        validationSchema: yup.object({
            roomId: yup.number().required('Required'),
            companyId: yup.number().required('Required'),
            startDate: yup.string().required('Required'),
            endDate: yup.string().required('Required'),
            price: yup.number().required('Required')
        }),
        onSubmit: values => {
            saveReservation(values);
          },
    });

    return(
        <div>
            <NavigationBar/>
            <div className="container">
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                        <Form.Label>Room Id</Form.Label>
                        <Form.Control
                        type="number"
                        name="roomId"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.roomId}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.roomId && formik.errors.roomId ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.roomId}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                        <Form.Label>Company Id</Form.Label>
                        <Form.Control
                        type="number"
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
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="validationFormik03">
                            <Form.Label>Extra</Form.Label>
                            <Form.Control
                            type="checkbox"
                            name="hasExtra"
                            onChange={formik.handleChange}
                            value={formik.values.hasExtra}
                            onBlur={formik.handleBlur}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik04">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="yyyy-MM-dd HH:mm"
                        name="startDate"
                        onChange={formik.handleChange}
                        value={formik.values.startDate}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.startDate && formik.errors.startDate ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.startDate}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik05">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="yyyy-MM-dd HH:mm"
                        name="endDate"
                        onChange={formik.handleChange}
                        value={formik.values.endDate}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.endDate && formik.errors.endDate ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.endDate}</div>
                        ) : null}
                    </Form.Group> 
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik06">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder=""
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        onBlur={formik.handleBlur}
                        />
                        (hour*room_price + company_member * 10)
                        {formik.touched.price && formik.errors.price ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.price}</div>
                        ) : null}
                    </Form.Group>
                    </Form.Row>
                    <Button type="submit">Save Reservation</Button>
                </Form>
            </div>
        </div>
    );
};

const saveReservation = (values) =>{
    const res = {room:{id:values.roomId}, company:{id:values.companyId}, startDate:values.startDate, endDate:values.endDate, hasExtra:values.hasExtra, cost:values.price};
    console.log(res);
    (async () => {
        try{
            const response = await emar_api.post('/emar/reservation', res);
            console.log(response);
            response.status = 201 ? alert(response.data) : alert("Error");
        }catch{
            alert("Error")
        }
    })();
}

export default CreateReservation;