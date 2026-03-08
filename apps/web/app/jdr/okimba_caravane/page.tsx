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
                    name: "Désert - Nuit",
                    description: "En arrivant à Kahon'dé",
                    image: "https://i.ytimg.com/vi/lu_N7D5NMEM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=lu_N7D5NMEM",
                },
                {
                    name: "Kahon'dé - Souk",
                    description: "Quartier des Gakous",
                    image: "https://i.ytimg.com/vi/8uRtW8lBe0I/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=8uRtW8lBe0I",
                },
                {
                    name: "Kahon'dé - Oasis",
                    description: "Quartier des Ingambs",
                    image: "https://i.ytimg.com/vi/JjAEdyv9KgE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=JjAEdyv9KgE",
                },
                {
                    name: "Kahon'dé - Artisants",
                    description: "Quartier des Tiguèts",
                    image: "https://i.ytimg.com/vi/JN8nj2-7G34/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=JN8nj2-7G34",
                },
                {
                    name: "Kahon'dé - Brulés",
                    description: "Quartier des Zékaÿ",
                    image: "https://i.ytimg.com/vi/fbGM354M3ms/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=fbGM354M3ms",
                },
                {
                    name: "Kahon'dé - Palais",
                    description: "Quartier des Krinèrs",
                    image: "https://i.ytimg.com/vi/MCaekghzVtE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=MCaekghzVtE",
                },
                {
                    name: "Kahon'dé - Cave",
                    description: "Sous sol et puit",
                    image: "https://i.ytimg.com/vi/3Hwr_BaekgM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=3Hwr_BaekgM",
                },
            ],
            narrator: [
                {
                    name: "Une marche éreintante",
                    description: "La nuit a une journé de Ka'hondé",
                    image: "https://placehold.co/100x100?text=1",
                    file: assetsPath + "/sound/act-II/1.wav",
                },
                {
                    name: "Le fier village de Ka'hondé",
                    description: "Il arrive a ka'hondé pour la première fois",
                    image: "https://placehold.co/100x100?text=2",
                    file: assetsPath + "/sound/act-II/2.wav",
                },
                {
                    name: "Le Riad de Tchougou",
                    description: "La petite maison de Tchougou",
                    image: "https://placehold.co/100x100?text=3",
                    file: assetsPath + "/sound/act-II/3.wav",
                },
                {
                    name: "On trouve de tout au souk!",
                    description: "Le quartier Gankou",
                    image: "https://placehold.co/100x100?text=4",
                    file: assetsPath + "/sound/act-II/4.wav",
                },
                {
                    name: "La tente de Lakolak",
                    description: "Plus grande tente du zouk",
                    image: "https://placehold.co/100x100?text=5",
                    file: assetsPath + "/sound/act-II/5.wav",
                },
                {
                    name: "L'inconue a la fenêtre",
                    description: "Djaroun l'opportiniste",
                    image: "https://placehold.co/100x100?text=6",
                    file: assetsPath + "/sound/act-II/6.wav",
                },
                {
                    name: "Aïntchelek",
                    description: "La plus grande espionne de moukoubé",
                    image: "https://placehold.co/100x100?text=7",
                    file: assetsPath + "/sound/act-II/7.wav",
                },
                {
                    name: "La fresque Tiguets",
                    description: "Au détour d'une ruelle caché",
                    image: "https://placehold.co/100x100?text=8",
                    file: assetsPath + "/sound/act-II/8.wav",
                },
                {
                    name: "Le palais des Krinièr",
                    description: "Arrivé",
                    image: "https://placehold.co/100x100?text=10",
                    file: assetsPath + "/sound/act-II/10.wav",
                },
                {
                    name: "Le maître de combat",
                    description: "Le jardin intérieur du palais des Krinièr",
                    image: "https://placehold.co/100x100?text=11",
                    file: assetsPath + "/sound/act-II/11.wav",
                },
                {
                    name: "La salle de Sanga",
                    description: "",
                    image: "https://placehold.co/100x100?text=12",
                    file: assetsPath + "/sound/act-II/12.wav",
                },
                {
                    name: "Kahli",
                    description: "Sange de ka'hondé",
                    image: "https://placehold.co/100x100?text=13",
                    file: assetsPath + "/sound/act-II/13.wav",
                },
                {
                    name: "Des bêtes chez les brulés",
                    description: "Le quartier Zekaÿs",
                    image: "https://placehold.co/100x100?text=14",
                    file: assetsPath + "/sound/act-II/14.wav",
                },
                {
                    name: "Pad'queu l'écorcheur",
                    description: "vendeur de bêtes et de viande",
                    image: "https://placehold.co/100x100?text=15",
                    file: assetsPath + "/sound/act-II/15.wav",
                },
                {
                    name: "Pénurie d'eau dans l'oasis",
                    description: "Quartier Ingambs",
                    image: "https://placehold.co/100x100?text=16",
                    file: assetsPath + "/sound/act-II/16.wav",
                },
                {
                    name: "Escalier vers le sous sol",
                    description: "",
                    image: "https://placehold.co/100x100?text=17",
                    file: assetsPath + "/sound/act-II/17.wav",
                },
                {
                    name: "Un sous sol secret",
                    description: "",
                    image: "https://placehold.co/100x100?text=18",
                    file: assetsPath + "/sound/act-II/18.wav",
                },
                {
                    name: "Le trésor",
                    description: "A l'intérieur du temple",
                    image: "https://placehold.co/100x100?text=19",
                    file: assetsPath + "/sound/act-II/19.wav",
                },
                {
                    name: "Une tempête trop violante",
                    description: "On quitte kahondé",
                    image: "https://placehold.co/100x100?text=20",
                    file: assetsPath + "/sound/act-II/20.wav",
                },
            ],
            effects: []
        },
        {
            name: "Acte III",
            ambiances: [],
            narrator: [
                {
                    name: "La recherche du tunnel",
                    description: "Après la bulle VII",
                    image: "https://placehold.co/100x100?text=1",
                    file: assetsPath + "/sound/act-III/1.wav",
                },
                {
                    name: "L'approche du rocher",
                    description: "Ils ont résulu l'égnime des pierres",
                    image: "https://placehold.co/100x100?text=2",
                    file: assetsPath + "/sound/act-III/2.wav",
                },
                {
                    name: " L'ouverture de la porte",
                    description: "Ils ont résulu l'égnime de la porte",
                    image: "https://placehold.co/100x100?text=3",
                    file: assetsPath + "/sound/act-III/3.wav",
                },
                {
                    name: " L'entrée dans les profondeurs",
                    description: "Ils sont entré dans le tunnels",
                    image: "https://placehold.co/100x100?text=4",
                    file: assetsPath + "/sound/act-III/4.wav",
                },
                {
                    name: " Le Village Pikpikk",
                    description: "",
                    image: "https://placehold.co/100x100?text=5",
                    file: assetsPath + "/sound/act-III/5.wav",
                },
            ],
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
