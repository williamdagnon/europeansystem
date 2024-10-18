import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Accuei', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Prêts', image: iconsImgs.bills },
    { id: 6, title: 'Rapport', image: iconsImgs.report },
    { id: 7, title: 'Économies', image: iconsImgs.wallet },
    { id: 8, title: 'Conseils financiers', image: iconsImgs.wealth },
    // { id: 9, title: 'Comptes', image: iconsImgs.user },
    // { id: 10, title: 'Paramètres', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "20/09/24",
        amount: 20000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "26/07/24",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/24",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Fev",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mars",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Avr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "Mai",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automatisé",
        amount: 0
    },
    {
        id: 20, 
        title: "Prêt",
        type: "Automatisé",
        amount: 0
    },
    {
        id: 21, 
        title: "Denrée alimentaire",
        type: "Automatisé",
        amount: 0
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 0
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 0
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 0
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 0
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 0
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Payer les frais de mon enfant",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]