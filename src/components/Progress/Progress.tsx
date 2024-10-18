import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress: React.FC = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        // Temps total de chargement en millisecondes (par exemple, 2 minutes)
        const duration = 2 * 60 * 1000; // 2 minutes

        const interval = setInterval(() => {
            setPercentage((prevPercentage) => {
                const newPercentage = prevPercentage + 0.1; // Augmente progressivement
                if (newPercentage >= 100) {
                    clearInterval(interval); // Arrête le chargement à 100%
                    return 100;
                }
                return newPercentage;
            });
        }, duration / 1000); // Mise à jour toutes les secondes

        return () => clearInterval(interval); // Nettoie l'intervalle à la fin
    }, []);

    return (
        <div style={{ width: '130px', height: '130px', marginBottom:'13px'}}>
            <CircularProgressbar
                value={percentage}
                text={`${Math.round(percentage)}%`}
                styles={buildStyles({
                    pathColor: `rgb(13, 236, 13)`, // Couleur verte
                    textColor: '#fff',
                    trailColor: '#f1f1f1',
                })}
            />
        </div>
    );
};
export default Progress