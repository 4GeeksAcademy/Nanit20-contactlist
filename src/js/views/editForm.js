import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const EditForm = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { theid } = useParams();

    const inputName = (eName) => {
        setName(eName.target.value);
    };

    const inputEmail = (eEmail) => {
        setEmail(eEmail.target.value);
    };

    const inputPhone = (ePhone) => {
        setPhone(ePhone.target.value);
    };

    const inputAddress = (eAddress) => {
        setAddress(eAddress.target.value);
    };

    const handleSave = () => {
        actions.editContact(
            {
                full_name: name,
                email: email,
                phone: phone,
                address: address,
            },
            theid
        );

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };

    return (
        <>
            <div className="container text-center">
                <h1>Editar información del contacto</h1>
            </div>

            <div className="row ms-5 p-3">
                <div className="col-12 mb-3">
                    <label className="form-label">Nombre</label>
                    <input className="form-control mx-auto" onChange={inputName} value={name} placeholder="Nombre"/>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control mx-auto" onChange={inputEmail} value={email} placeholder="Email"/>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Móvil</label>
                    <input className="form-control mx-auto" onChange={inputPhone} value={phone} placeholder="Móvil"/>
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Dirección</label>
                    <input className="form-control mx-auto" onChange={inputAddress} value={address} placeholder="Dirección" />
                </div>

                <div className="col-12 mb-3">
                    <button className="btn btn-primary" style={{ width: "100%" }} onClick={handleSave}>
                        Guardar Cambios
                    </button>
                </div>

                <div className="container mb-3">
                    <Link to="/">Volver a la lista de contactos</Link>
                </div>
            </div>
        </>
    );
};