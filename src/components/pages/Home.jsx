import {Link} from 'react-router-dom'

import styles from './Home.module.css';
import img1 from '../../img/img1.jpg';
import spring from '../../img/spring.png';

import SubmitButton from '../../form/submitButton';
import Cursos from './Cursos';
import Sobre from './sobre';





function Home(){

  
    

    return (

      <section className={styles.home_container}>
        <div  className={styles.div1}>
          <h1>Seja Bem Vindo a Elo!</h1>
          <p>Junte-se a nós e trilhe o caminho do sucesso com nossos cursos de estudos de desenvolvimento!</p>
          <Link to='/registrar'>
            <SubmitButton text="Cadastro"/>
          </Link>
          
          {/*<img src={img1} alt="teste" classname="img1"/>*/}
        </div>

        <div>
          <h2>Faça Login e veja mais sobre nossos cursos!</h2>
          
        </div>  
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              
            </div>
            <div className="carousel-item">
              <img src={spring} alt="springlogo" className={styles.logo}/>
            </div>
            <div className="carousel-item">
              <img src={spring} alt="springlogo" className={styles.logo}/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <Cursos/>
        <Sobre/>

        


      </section>
      
    )
}
  
export default Home