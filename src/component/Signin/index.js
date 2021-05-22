import React, { useState } from 'react';
import {firebase} from '../../firebase';
import { CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {showErrorToast, showSuccessToast} from '../../utils/tools'
const Signin = (props)=>{
    const [loading,setLoading] = useState(false);
    
    const formik = useFormik({
        initialValues:{
            email:'tusharkhatri122@gmail.com',
            password:'tushar123',
        },
        validationSchema:Yup.object({
            email:Yup.string()
                .email('Invalid email address')
                .required('This field is required'),
            password:Yup.string()
                .required('This field is required')
        }),
        onSubmit: (values)=>{
            setLoading(true);
            submitForm(values);
        }
    })

    const submitForm = (values)=>{
        firebase.auth()
        .signInWithEmailAndPassword(
            values.email,
            values.password
        ).then(res=>{
            showSuccessToast ('Logged In')
            props.history.push('/dashboard');
        }).catch(err=>{
            setLoading(false);     
            showErrorToast ('Username/password not matched')    
        })
    }
    const errors=[]
    return(
        <div >
            <div className="signin_wrapper" style={{margin:'100px'}}>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Please Login</h2>
                    <input
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email?  
                        <div className="error_label">
                            {formik.errors.email}
                        </div>
                    : null}
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ?
                        <div className="error_label">
                            {formik.errors.password}
                        </div>
                    :null}

                    {loading ? 
                        <CircularProgress color="secondary" className="progress"/>
                        : <button type="submit">Log in</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Signin;