import React from "react";
import styles from './Html.module.css';
import SubmitButton from '../../form/submitButton';

function Html(){
    return(
        <div className={styles.container}>
            <h1 className={styles.titulo}>HTML 5 - Do Básico ao Avançado</h1>
            <hr />
            <div className={styles.btn}>
                <SubmitButton text="Matricular-se"></SubmitButton>
            </div>
        
            <div className={styles.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nPEpaft1y1k?si=qZXqKIJSmeBjk_It" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )

}

export default Html