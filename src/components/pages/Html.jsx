import React from "react";
import styles from './Html.module.css';
import SubmitButton from '../../form/submitButton';
import Ranking from './ranking';
import {Link} from 'react-router-dom';

function Html(){
    return(
        <div>
            

                    
            <div className={styles.container}>
                <h1 className={styles.titulo}>HTML 5 - Do Básico ao Avançado</h1>
                
                <div className={styles.btn}>
                    <SubmitButton text="Matricular-se"></SubmitButton>
                </div>

                <hr />
            
                <div className={styles.video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nPEpaft1y1k?si=qZXqKIJSmeBjk_It" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div>
              <Link to='/ranking'>
                <button className={styles.button}>Clique Aqui para ver o ranking de nossos cursos</button>
              </Link>
            </div>
        </div>
    )

}

export default Html