import {Link} from 'react-router-dom';
import styles from '../../components/pages/areauser.module.css';
import SubmitButton from '../../form/submitButton';


function AreaUser(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Bem Vindo user</h1>
                <div className={styles.buttonBox}>
                    <SubmitButton
                         
                        text="Sair"> 
                    </SubmitButton>

                    <SubmitButton 
                    text = "Editar dados" > 
                    </SubmitButton>
                </div>
                <hr />
            </div>
            <div className={styles.box2}>

                <SubmitButton 
                    text = "Acessar Cursos" > 
                </SubmitButton>
        
            </div>


        </div>

    )   
      
}
      
export default AreaUser