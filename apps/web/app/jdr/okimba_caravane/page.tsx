"use client";

import {IJdrPage, JdrPage} from "@/app/jdr/components/jdrPage";

const assetsPath = "/assets/okimba_caravane";

const page: IJdrPage = {
    tabs: [
        {
            name: "Acte I",
            ambiances: [
                {
                    name: "Desert",
                    description: "Marche dans le dessert calme",
                    image: "https://i.ytimg.com/vi/WZh3mpviDl8/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=WZh3mpviDl8",
                },
                {
                    name: "Desert - Camp",
                    description: "Camp de l'arbre pale",
                    image: "https://i.ytimg.com/vi/rOAiDBTr-N8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=rOAiDBTr-N8",
                },
                {
                    name: "Desert - Oasis - Chasse",
                    description: "L'oasis de ...",
                    image: "https://i.ytimg.com/vi/JjAEdyv9KgE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=JjAEdyv9KgE",
                },
                {
                    name: "Desert - Caverne",
                    description: "Trou vers l'oasis de ...",
                    image: "https://i.ytimg.com/vi/lf7yb33oRbM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=lf7yb33oRbM",
                },
                {
                    name: "Desert - Venteux",
                    description: "Desert avec du vent",
                    image: "https://i.ytimg.com/vi/4E-_Xpj0Mgo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=4E-_Xpj0Mgo",
                }
            ],
            narrator: [
                {
                    name: "Explication",
                    description: "Début de l'aventure",
                    image: assetsPath + "/img/act-I/0.png",
                    file: assetsPath + "/sound/act-I/start.wav",
                },
                {
                    name: "Arbre-pâle",
                    description: "Arrivée à l'Arbre-pâle",
                    image: assetsPath + "/img/act-I/1.png",
                    file: assetsPath + "/sound/act-I/arbre_pale.wav",
                },
                {
                    name: "Chemin vers la chasse",
                    description: "Inoui cherche le chermin de l'oasis",
                    image: assetsPath + "/img/act-I/2.png",
                    file: assetsPath + "/sound/act-I/whole_oasis.wav",
                },
                {
                    name: "L'oasis",
                    description: "Arrivée à l'oasis",
                    image: assetsPath + "/img/act-I/3.png",
                    file: assetsPath + "/sound/act-I/oasis.wav",
                },
                {
                    name: "Chasse carnivor",
                    description: "Zoko et les carnivors à la chasse",
                    image: assetsPath + "/img/act-I/4.png",
                    file: assetsPath + "/sound/act-I/chasse_carnivor.wav",
                },
                {
                    name: "Chasse herbivor",
                    description: "Inoui et le herbivors à la chasse",
                    image: assetsPath + "/img/act-I/5.png",
                    file: assetsPath + "/sound/act-I/chasse_herbivor_chemin.wav",
                },
                {
                    name: "Cours d'Inoui",
                    description: "Inoui fait son cours sur les plantes",
                    image: assetsPath + "/img/act-I/6.png",
                    file: assetsPath + "/sound/act-I/chasse_herbivor_cours.wav",
                },
            ],
            effects: [
            ]
        },
        {
            name: "Acte II",
            ambiances: [
                {
                    name: "Kahon'dé - Souk",
                    description: "Le souk de Kahon'dé",
                    image: "https://i.ytimg.com/vi/8uRtW8lBe0I/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=8uRtW8lBe0I",
                },],
            narrator: [],
            effects: []
        },
        {
            name: "Acte III",
            ambiances: [],
            narrator: [],
            effects: []
        },
        {
            name: "Acte IV",
            ambiances: [],
            narrator: [],
            effects: []
        }
    ]
}

export default function Page() {
    return (
        <JdrPage jdrPage={page}/>
    )
}
