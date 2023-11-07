import {Link} from 'react-router-dom'

import React from "react";
import styles from './Login.module.css';
import Input from '../../form/input';
import SubmitButton from '../../form/submitButton';

function Login(){

    return (
      
      
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Login</h1>
        

          <Input 
              type="text"
              text="CPF ou CFEP: "
              name="id"
              placeholder="CPF ou CFEP:"
              
          />

          <Input 
              type="password"
              text="Senha: "
              name="password"
              placeholder="Senha"
              
          />
          <div  className={styles.btnLogin}>
            <SubmitButton className={styles.button} text="Login"/>
          </div>
          
          <div className={styles.box}>
            Não possui conta? 
            <Link to='/registrar'>
              <SubmitButton text="Cadastro"/>
             </Link>
          </div>


        </form>
      </div>
    )
}

  
  export default Login