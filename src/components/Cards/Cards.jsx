import { iconsImgs } from "../../utils/images";
import "./Cards.css";
import React, { useState, useEffect } from 'react';

const Cards = () => {
    const [count, setCount] = useState(10000); // État pour le compteur

    useEffect(() => {
        function countMoneyTo300M() {
            const maxCount = 300000000;
            const duration = 120000; // 2 minutes
            const step = maxCount  // Pas à ajouter à chaque intervalle
            const intervalTime= duration/step

            const interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < maxCount) {
                        return prevCount + 10000; // Incrémenter de 1
                    } else {
                        clearInterval(interval); // Arrêter une fois 300 millions atteints
                        return maxCount; // Assurer que la valeur finale est 300 millions
                    }
                });
            }, intervalTime); // Mise à jour toutes les 100ms
        }

        countMoneyTo300M(); // Démarrer le comptage dès que le composant est monté
    }, []);
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Europay Système</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c1-content">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="cart">
                    <p>DISCOUNT EUROPEAN SYSTEM</p>
                    <p>EUROPEAN ECONOMIC AND MONETARY UNION</p>
                    <p>UNION ATM UNIVERSAL ACCOUNT</p>
                </div>
                <div><img src="./src/assets/images/hand.jpg" alt="hand" style={{width:'80%', marginLeft: '10px'}} /></div>
            </div>
            
            <div className="" style={{display: 'flex', justifyContent : 'space-between'}}>
                <div><img src="./src/assets/images/puce.jpg" alt="puce" style={{marginTop: '30px', marginLeft: '15px'}} /></div>
                <div style={{fontSize: '11px', lineHeight: '18px'}}>
                    <p>PIN ATM: 8424</p>
                    <p>EUROPEAN CERTIFICATE MONETARY UNION</p>
                    <p style={{color:'rgb(26, 233, 26)'}}>4577 9314 1777 5617</p>
                    <p>EUROPEAN INTER-CASH MONETARY UNION</p>
                    <p>LOT CCV : 767</p>
                    <p>EXPIRATION : 09/25</p>

                </div>
            </div>
            
            <div className="card-logo-wrapper">
                <div>
                    <p style={{fontSize: '10px', fontFamily: 'roboto', marginTop:'13px'}}>NET BALANCE : 
                        <span style={{color:'rgb(26, 233, 26)'}}>{new Intl.NumberFormat('fr-FR', { style: 'decimal'}).format(count)}</span>
                        <span> EUR</span>
                    </p>
                </div>
                <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
