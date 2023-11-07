import React from 'react';
import styles from './sobre.module.css';

function Sobre(){
    return(
        <div clasName={styles.container}>
            <div clasName={styles.box2}>
                <h1>Sobre Nós</h1>
                
                <p>Unidos pela paixão pelo aprendizado e desenvolvimento web, seis desenvolvedores se uniram no ano de 2023 com a crição da  Elo Startup. A plataforma Elo busca compartilhar e aperfeiçoar a educação de desenvolvimento web com sistema de cursos online gratuitos e acessiveis de alta qualidade. Com um catalogo que conta com mais conteudo a cada dia, com cursos desde design de interface de usuário até desenvolvimento de back-end.</p>
            </div>
             <div clasName={styles.box2}>
                <h1>Missão</h1>
                <p>Promover o aprendizado acessível e prático de desenvolvimento web e backend, capacitando indivíduos para se tornarem profissionais qualificados e preparados para enfrentar os desafios do setor de tecnologia</p>
             </div>
             <div clasName={styles.box2}>
                <h1>Visão</h1>
                <p>Ser a principal referência global em educação tecnológica, fornecendo um ambiente de aprendizado inovador e adaptável que capacite pessoas a transformarem ideias em soluções digitais impactantes.</p>
             </div>
             <div clasName={styles.box2}>
                <h1>Valores</h1>
                <p>Inovação.</p>
                <p>Acessibilidade.</p>
                <p>Qualidade.</p>
                <p>Comunidade.</p>
                <p>Empreendedorismo.</p>
             </div>

        </div>
    )
}

export default Sobre