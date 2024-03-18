import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

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
        actions.addContact({
            full_name: name,
            email: email,
            phone: phone,
            address: address,
        });
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };

    return (
        <>
            <div className="container text-center">
                <h1>Añade un contacto a tu agenda</h1>
            </div>

            <div className="row ms-5 p-3 mx-auto">
                <div className="col-12 mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input className="form-control mx-auto" onChange={inputName} value={name} placeholder="Nombre Completo"></input>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control mx-auto" onChange={inputEmail} value={email} placeholder="Email"></input>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Móvil</label>
                    <input className="form-control mx-auto" onChange={inputPhone} value={phone} placeholder="Móvil"></input>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Dirección</label>
                    <input className="form-control mx-auto" onChange={inputAddress} value={address} placeholder="Dirección"></input>
                </div>
                <div className="col-12 mb-3">
                    <button className="btn btn-primary" style={{ width: "100%" }} onClick={handleSave}>
                        Añadir contacto
                    </button>
                </div>
                <div className="container mb-3">
                    <Link to="/">Volver a la lista de contactos</Link>
                </div>
            </div>
        </>
    );
};