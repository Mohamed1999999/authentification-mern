import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ajoutez un fichier CSS pour les styles personnalisés si nécessaire
import './index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



const SignUp = () => {
    const[nom, setNom]= useState()
    const[email, setEmail]= useState()
    const[mdp, setMdp]= useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/registre', {nom, email, mdp})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

    return (
        <div className="container h-100 ">
            
            <div className="row align-items-center h-100">
                
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body" onChange={handleSubmit}>
                            <h2 className="card-title text-center mb-4">Inscription ToDoList</h2>
                            <div className="form-group" >
                                <label htmlFor="nom">Nom</label>
                                <input type="text" className="form-control" id="nom" placeholder="Saisir votre nom" 
                                    autoComplete='off'
                                    onChange={(e) => setNom(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input type="email" className="form-control" 
                                 placeholder="Saisir votre email"
                                 autoComplete='off'
                                 onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mdp">Mot de passe</label>
                                <input type="password" className="form-control" placeholder="Saisir votre mot de passe"
                                  autoComplete='off'
                                    onChange={(e) => setMdp(e.target.value)}
                                />
                            </div>
                            <button
                                    type="submit"
                                    className=" inscription btn btn-primary btn-lg btn-block mt-3 ml-5"
                                    style={{ width: '300px', fontFamily: 'Arial, sans-serif' }}>
                                        S'inscrire
                            </button>
                            <p>Vous avez déja un compte?</p>
                            <Link to="/connection" className="mt-3 text-center"> Se connecter</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
