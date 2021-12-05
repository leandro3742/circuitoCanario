import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { input } from '../globalConst';

const Managment = () => {

    // const [loginUser, setLoginUser] = useState(false);
    const [ocultarPass, setOcultarPass] = useState("password");
    const [spinner, setSpinner] = useState("d-none");
    const [opacidadForm, setOpacidadForm] = useState("100%");

    const errorLogin = (error) => {
        Swal.fire({
            title: error,
            icon: "error",
        })
    }

    const signIn = async(username, password) => {
       
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        let password = form.password.value;
        let email = form.email.value;
        signIn(email, password)
        // login(email, password);
    }

    const mostrarPassword = () => {
        if(ocultarPass === "password")
            setOcultarPass("text")
        else
            setOcultarPass("password")
    }

    return (
        <div className="row m-0 p-0 py-3 col-12 col-lg-10">
        <Form className="formulario shadow col-lg-4 col-12 m-auto p-0" style={{opacity: opacidadForm}} onSubmit={handleSubmit}>
            {/* <div style={{position: "absolute", top:"45%", left: "45%", width:"5%", zIndex: "1", opacity: "100%"}} className={spinner}>
                <Spinner/>
            </div>  */}

            <div className="col-12 m-auto py-2">
                <h2 className="text-center"><b>Iniciar sesion</b></h2>
            </div>

            <Form.Group className="col-lg-11 col-12 m-auto py-3">
                <Form.Label>Email o nombre </Form.Label>
                <Form.Control style={input} id="email" type="text" autoComplete="off" placeholder="Ingrese su email o su nombre"/>
            </Form.Group>

            <Form.Group className="col-lg-11 col-12 m-auto py-3">
                <Form.Label>Password</Form.Label>
                <Form.Control style={input} id="password" type={ocultarPass} placeholder="Password" />
                <Form.Check className="mt-1" type="checkbox" label="Mostrar Password" onClick={mostrarPassword} />
            </Form.Group>

            <Form.Group className="col-lg-11 col-12 m-auto py-3">
                <div className="d-flex justify-content-around align-items-center">
                    <Button className="col-lg-4 col-4" type="submit">
                        Ingresar
                    </Button>
                    <span onClick="" className="col-lg-5 col-7 text-primary text-right float-right" style={{cursor: "pointer", textDecoration: "underline"}}>Olvide contraseña</span>
                </div>
            </Form.Group>
        </Form>
        </div>
    )
}
export default Managment