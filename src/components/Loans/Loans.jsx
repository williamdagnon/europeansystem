import { iconsImgs } from "../../utils/images";
import Progress from "../Progress/Progress";
import "./Loans.css";
import React, { useState, useEffect } from 'react';
const Loans = () => {
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
    <div className="subgrid-two-item grid-common grid-c7">
        <div className="grid-c-title">
            <h3 className="">Chargement de fonds vers votre carte</h3>
            <button className="grid-c-title-icon">
                <img src={iconsImgs.plus} />
            </button>
        </div>
        <div className="grid-c7-content" style={{paddingTop: '40px', display:'flex', justifyContent:'space-around'}}>
            <Progress/>
            <ul className="data-list">
                <li className="data-item text-silver-v1">
                    <span className="data-item-text">Disponible</span>
                    <span className="data-item-value">300 000 000 EUR</span>
                </li>
                <li className="data-item text-silver-v1">
                    <span className="data-item-text">Transféré</span>
                    <span className="data-item-value">{new Intl.NumberFormat('fr-FR', { style: 'decimal'}).format(count)} EUR</span>
                </li>
            </ul>
        </div>
        
    </div>
    
  )
}

export default Loans
