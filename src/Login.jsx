import React from 'react';

const Login = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ minWidth: '300px', maxWidth: '500px' }}>
        <h2 className="mb-4">Se connecter</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="nom" className="form-label" >Nom :</label>
            <input type="text" className="form-control" id="nom" required placeholder="nom d'utulisateur ou email"/>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="motDePasse" className="form-label">Mot de passe :</label>
            <input type="password" className="form-control" id="motDePasse" required />
          </div>
          <div className='ml-8'><button type="submit" className="btn btn-primary">Se connecter</button></div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
