import React, { useState, useEffect } from 'react'
import { Form, Alert } from 'react-bootstrap';
// import Spinner from './Spinner';
import { input } from '../globalConst';

import "../styles/formPlayer.css";

const FormPlayers = () => {
    
    const [arrPlayers, setArrPlayers] = useState([])
    const [cantPlayer, setCantPlayer] = useState(-1);    
    const [aux, setAux] = useState(false)
    const [showButton, setShowButton] = useState({opacity: "50%"})
    const [saveInscription, setSaveInscription] = useState(false)
    const [showAlert, setShowAlert] = useState("d-none");
    const [showAlertPlayers, setShowAlertPlayers] = useState("d-none");

    useEffect(() => {
        changeDivision();
    }, [])

    useEffect(() => {
        if(aux)
            setAux(false)
    }, [aux])

    const agregarIntegrante = () => {
        if(cantPlayer > arrPlayers.length){
            let name = document.getElementById("name").value
            let lastName = document.getElementById("lastName").value
            if(name != "" && lastName != ""){
                let aux = arrPlayers;
                aux.push({name: name, lastName: lastName});
                console.log(aux)
                setArrPlayers(aux);
                if(cantPlayer === arrPlayers.length){
                    setShowButton({opacity: "100%"})
                    setSaveInscription(true)
                }
                setAux(true);
            }
        }
        else{
            setShowAlertPlayers("");
        }
    }
    const removePlayer = (playerId) => {
        let aux = arrPlayers;
        aux.splice(playerId, 1)
        setArrPlayers(aux)
        setShowButton({opacity: "50%"})
        setSaveInscription(false)
        setAux(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(saveInscription){
            if(document.getElementById("email").value === "" || document.getElementById("phoneNumber").value === ""){
                setShowAlert("")
            }
            let email = event.target.email.value;
            let phoneNumber = event.target.phoneNumber.value
            console.log(arrPlayers)
            console.log(email)
            console.log(phoneNumber)
        }
    }

    const changeDivision = () => {
        let division = document.getElementById("division").value; 
        switch (division) {
            case "Formativas femeninas":
                setCantPlayer(2)
                break;
            case "Formativas masculinas":
                setCantPlayer(2)
                break;
            case "Duplas masculino":
                setCantPlayer(2)
                break;
            case "Duplas femenino":
                setCantPlayer(2)
                break;
            case "Cuartetas mixtas":
                setCantPlayer(4)
                break;
            default:
                break;
        }
    }
    return (
        <div className="row col-12 m-0 p-0 pb-5 d-flex flex-column align-items-center">
            
            <Alert style={{position: "fixed", top: "10px", right: "10px", zIndex: "1"}} variant="danger" className={showAlert} onClose={() => setShowAlert("d-none")} dismissible>
                <Alert.Heading>Ops... Faltan completar algunos campos</Alert.Heading>
            </Alert>

            <Alert style={{position: "fixed", top: "10px", right: "10px", zIndex: "1"}} variant="danger" className={showAlertPlayers} onClose={() => setShowAlertPlayers("d-none")} dismissible>
                <Alert.Heading>Supero el limite maximo de jugadores</Alert.Heading>
            </Alert>

            <Form className="formulario shadow col-lg-4 col-12 mt-5 m-auto" onSubmit={handleSubmit}>
            
                <Form.Group className="text-black py-2">
                    <h2 className="text-center"><b>Inscripcion circuito canario</b></h2>
                </Form.Group>  

                <Form.Group className="col-lg-11 col-12 m-auto py-3" controlId="email">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control style={input} autoComplete="off" type="text" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="col-lg-11 col-12 m-auto py-3">
                    <Form.Label>Teléfono de contacto *</Form.Label>
                    <Form.Control style={input} autoComplete="off" type="text" id="phoneNumber" placeholder="Teléfono de contacto"/>
                </Form.Group>
                
                <Form.Group  className="col-lg-11 col-12 m-auto py-3">
                    <Form.Label>Elegi la division</Form.Label>
                    <select style={input} id="division" className="form-control" onChange={changeDivision}>
                        <option value="Formativas femeninas">Formativas femeninas</option>
                        <option value="Formativas masculinas">Formativas masculinas</option>
                        <option value="Duplas masculino">Duplas masculino</option>
                        <option value="Duplas femenino">Duplas femenino</option>
                        <option value="Cuartetas mixtas">Cuartetas mixtas</option>
                    </select>
                </Form.Group>

                <Form.Group  className="col-lg-11 col-12 m-auto py-3">
                    <Form.Label>Elegi la fecha del circuito</Form.Label>
                    <select style={input} id="circuitDate" className="form-control">
                        <option value="Formativas femeninas">Santa lucia 17/12 y 18/12</option>
                    </select>
                </Form.Group>

                <Form.Group className="col-lg-11 col-12 m-auto py-3" controlId="name">
                    <Form.Label>Nombre del jugador {cantPlayer.value}</Form.Label>
                    <Form.Control style={input} placeholder="Nombre del jugador"/>
                </Form.Group>

                <Form.Group className="col-lg-11 col-12 m-auto py-3" controlId="lastName">
                    <Form.Label>Apellido del jugador {cantPlayer.value}</Form.Label>
                    <Form.Control style={input} placeholder="Apellido del jugador" />
                </Form.Group>
                
                <div className="col-12 mb-4">
                    <button className="btn btn-secondary buttonFormPlayer" type="button" onClick={agregarIntegrante}>Agregar jugador</button>
                </div>

                <table className="table col-11 m-auto">
                    <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                        {arrPlayers.map((elem, iterator) =>{
                            return(
                                <tr key={iterator}>
                                <th scope="row">{iterator + 1}</th>
                                <td>{elem.name}</td>
                                <td>{elem.lastName}</td>
                                <td><button className="bnt btn-danger buttonFormPlayer rounded" type="button" onClick={()=>removePlayer(iterator)}>X</button></td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>

                <div className="col-12 py-3 d-flex justify-content-around">
                    <button className="btn btn-primary buttonFormPlayer" style={showButton} type="submit">
                        Enviar inscripción
                    </button>
                </div>
            </Form>
        </div>
    )
}
export default FormPlayers
