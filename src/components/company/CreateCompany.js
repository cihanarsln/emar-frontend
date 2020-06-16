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
            mail: "",
            city: "",
            memberCount: ""
        },
        validationSchema: yup.object({
            name: yup.string().required('Required'),
            mail: yup.string().required('Required'),
            city: yup.string().required('Required'),
            memberCount: yup.number().required('Required')
        }),
        onSubmit: values => {
            saveCompany(values);
          },
    });

    return(
        <div>
            <NavigationBar/>
            <div className="container">
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                        <Form.Label>Company name</Form.Label>
                        <Form.Control
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.name}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                        <Form.Label>Mail</Form.Label>
                        <Form.Control
                        type="text"
                        name="mail"
                        onChange={formik.handleChange}
                        value={formik.values.mail}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.mail && formik.errors.mail ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.mail}</div>
                        ) : null}
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik03">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                        type="text"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.city}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik04">
                        <Form.Label>Member Count</Form.Label>
                        <Form.Control
                        type="number"
                        name="memberCount"
                        onChange={formik.handleChange}
                        value={formik.values.memberCount}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.memberCount && formik.errors.memberCount ? (
                            <div style={{fontFamily:"Lexend Deca", fontSize:"10px", color: "#ff0000"}}>{formik.errors.memberCount}</div>
                        ) : null}
                    </Form.Group>
                    </Form.Row>
                    <Button type="submit">Save Company</Button>
                </Form>
            </div>
        </div>
    );
};

const saveCompany = (values) =>{
    (async () => {
        try{
            const response = await emar_api.post('/emar/company', values);
            response.status = 201 ? alert(response.data) : alert("Error");
        }catch{
            alert("This name already used.")
        }
    })();
}


export default CreateRoom;