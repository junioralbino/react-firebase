import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 

function Home(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(){
    
  }

  return(
    <div className='home-container'>
      <h1>Lista de Tarefa</h1>
      <span>Gerencie sua agenda de forma fácil.</span>


      <form className='form' onSubmit={handleLogin}>
        <input type="text" placeholder="digite seu e-mail..." value={email} onChange={(e) => setEmail(e.target.value) } />
        <input autoComplete={false} type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value) } />

        <button type='submit'>Acessar</button>
      </form>

      <Link className='button-link' to="/register">
           Não tem conta ainda ? Cadastre-se
        </Link>
    </div>
  )
}

export default Home;
