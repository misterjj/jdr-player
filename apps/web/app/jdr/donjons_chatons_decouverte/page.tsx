"use client";

import {IJdrPage, JdrPage} from "@/app/jdr/components/jdrPage";

const assetsPath = "/assets/okimba_caravane";

const page: IJdrPage = {
    tabs: [
        {
            name: "Premières aventures",
            ambiances: [
                {
                    name: "Abracha",
                    description: "La ville est calme",
                    image: "https://i.ytimg.com/vi/rEfKdWSlcUo/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=rEfKdWSlcUo",
                },
                {
                    name: "Abracha - foule en colère",
                    description: "La foulle n'est pas d'accord",
                    image: "https://i.ytimg.com/vi/whtz44p9oII/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6h1uSxqOGxyKKc3qEaC4pr_3cpQ",
                    file: "https://www.youtube.com/watch?v=whtz44p9oII",
                },
                {
                    name: "Campagne a pied",
                    description: "Marche dans la campagne de du royaume des chats",
                    image: "https://i.ytimg.com/vi/wEEc9RhHTzU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=wEEc9RhHTzU",
                },
                {
                    name: "Campagne la nuit",
                    description: "Il est temps de se reposer",
                    image: "https://i.ytimg.com/vi/ybTXj_OE4-k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=ybTXj_OE4-k",
                },
                {
                    name: "Charrete",
                    description: "Charrette d'Anatole et Picotin",
                    image: "https://i.ytimg.com/vi/2UnwwWvqYIc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=2UnwwWvqYIc",
                },
                {
                    name: "Réparation mécanique",
                    description: "Les chiens réparent leur bête mécanique",
                    image: "https://i.ytimg.com/vi/pRkFl9j3NLk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=pRkFl9j3NLk",
                },
                {
                    name: "La forêt endormie",
                    description: "Forêt mysterieuse",
                    image: "https://i.ytimg.com/vi/YtMWqnHSVYg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=YtMWqnHSVYg",
                },
            ],
            narrator: [
            ],
            effects: [
            ]
        },
        {
            name: "Grande Roue",
            ambiances: [
                {
                    name: "Grande Roue",
                    description: "Fête foraine festive",
                    image: "https://i.ytimg.com/vi/4S3VseNyKfs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5JhVvWD05G1FwkkhHvgk_O_p3Vg",
                    file: "https://www.youtube.com/watch?v=4S3VseNyKfs",
                },
                {
                    name: "Tremblement de terre",
                    description: "",
                    image: "https://i.ytimg.com/vi/9ta0_OKYADg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6h1uSxqOGxyKKc3qEaC4pr_3cpQ",
                    file: "https://www.youtube.com/watch?v=9ta0_OKYADg",
                },
                {
                    name: "Publique en panique",
                    description: "",
                    image: "https://i.ytimg.com/vi/whtz44p9oII/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6h1uSxqOGxyKKc3qEaC4pr_3cpQ",
                    file: "https://www.youtube.com/watch?v=whtz44p9oII",
                },
                {
                    name: "Campagne la nuit",
                    description: "Il est temps de se reposer",
                    image: "https://i.ytimg.com/vi/ybTXj_OE4-k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=ybTXj_OE4-k",
                },
                {
                    name: "Grande Roue",
                    description: "Bruit de feu et foule en panique",
                    image: "https://i.ytimg.com/vi/5maXAc1uWG8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=5maXAc1uWG8",
                },
                {
                    name: "Donjon",
                    description: "Sous grande Roue",
                    image: "https://i.ytimg.com/vi/wScEFaoqwPM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnsGmXk7SZrfDGoj7ltsgtQyDckA",
                    file: "https://www.youtube.com/watch?v=wScEFaoqwPM",
                },
            ],
            narrator: [
            ],
            effects: [
            ]
        },
    ]
}

export default function Page() {
    return (
        <JdrPage jdrPage={page}/>
    )
}
