import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Form, Col, Button} from 'react-bootstrap';

import emar_api from '../../apis/emar.js';
import NavigationBar from './NavigationBar';

const CreateRoom = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            capacity: "",
            price: "",
            city: "",
            district: ""
        },
        validationSchema: yup.object({
            name: yup.string().required('Required'),
            capacity: yup.number().required('Required'),
            price: yup.number().required('Required'),
            city: yup.string().required('Required'),
            district: yup.string().required('Required')
        }),
        onSubmit: values => {
            saveRoom(values);
          },
    });

    return(
        <div>
            <NavigationBar/>
            <div className="container">
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                        <Form.Label>Room name</Form.Label>
                        <Form.Control
                        type="text"
                        name="name"
                        placeholder="Sunset"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.name}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                        type="number"
                        min="0"
                        name="capacity"
                        onChange={formik.handleChange}
                        value={formik.values.capacity}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.capacity && formik.errors.capacity ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.capacity}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik03">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type="number"
                        min="0"
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.price}</div>
                        ) : null}
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Istanbul"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.city}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationFormik05">
                        <Form.Label>District</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Besiktas"
                        name="district"
                        onChange={formik.handleChange}
                        value={formik.values.district}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.district && formik.errors.district ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.district}</div>
                        ) : null}
                    </Form.Group> 
                    </Form.Row>
                    <Button type="submit">Save Room</Button>
                </Form>
            </div>
        </div>
    );
};

const saveRoom = (values) =>{
    (async () => {
        try{
            const response = await emar_api.post('/emar/room', values);
            response.status = 201 ? alert(response.data) : alert("Error");
        }catch{
            alert("This name already used.")
        }
    })();
}


export default CreateRoom;