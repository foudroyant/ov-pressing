'use client';
import { useState } from 'react';

const features = [
    {
        title : 'Nettoyage écologique et personnalisé',
        details : "Permettre aux clients de choisir parmi plusieurs options de nettoyage écologique, incluant des détergents biodégradables et des méthodes de traitement des tissus respectueuses de l'environnement. Le client peut également indiquer des préférences spécifiques pour des tissus délicats."
    },
    {
        title : "Programme de fidélité et offres personnalisées",
        details : "Mettre en place un programme de fidélité avec des points ou des récompenses pour chaque commande passée. Les clients fidèles peuvent bénéficier de réductions spéciales, d’offres saisonnières, ou de services gratuits (par exemple, le nettoyage d’un article supplémentaire)."
    },
    {
        title : "Nettoyage express sous 24h",
        details :"Besoin urgent de récupérer votre tenue ? OV Pressing propose un service express avec une livraison garantie sous 24 heures, pour répondre aux besoins de votre emploi du temps serré."
    },
    {
        title : "Soin anti-allergène et désinfection des textiles",
        details :"Nous proposons un traitement spécial pour éliminer les allergènes, bactéries et virus présents dans vos vêtements. Un nettoyage en profondeur qui assure un linge propre et sain pour toute la famille."
    }
]

export const Feature = () => {
    //const [features, setFeatures] = useState([]);

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <p className="text-base text-gray-700 md:text-lg">
          L'Art du Pressing de Luxe avec OV Pressing : Propreté, Précision, Perfection. 
          Faites confiance à un pressing qui conjugue innovation, expertise et service personnalisé pour un résultat impeccable.
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          {
            features.map((f,i)=>(
                <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">{f.title}</h6>
            <p className="mb-3 text-sm text-gray-900">
              {f.details}
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              En savoir plus
            </a>
          </div>
            ))
          }
        </div>
      </div>
    );
  };