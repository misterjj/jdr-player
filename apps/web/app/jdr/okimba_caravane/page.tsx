import JdrPage, {IJdrPage} from "@/app/jdr/components/jdrPage";

const assetsPath = "/assets/okimba_caravane";

const page: IJdrPage = {
    tabs: [
        {
            name: "Acte I",
            ambiances: [
                {
                    name: "Tarverne Pirate",
                    description: "Musique dans la taverne",
                    image: "https://i.ytimg.com/vi/O2U1mkoZyu0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5UOJrSrwUlbZ0jZOlI0SFzoGePg",
                    file: "https://www.youtube.com/watch?v=O2U1mkoZyu0",
                },
                {
                    name: "Mon super titre 2",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample2.aac",
                },
                {
                    name: "Mon super titre 4",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample4.aac",
                },
                {
                    name: "Mon super titre 3",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Mon super titre",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample1.aac",
                },
                {
                    name: "Mon super titre 2",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample2.aac",
                },
                {
                    name: "Mon super titre 4",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample4.aac",
                },
                {
                    name: "Mon super titre 3",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                }
            ],
            narrator: [
                {
                    name: "Mon super titre",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample1.aac",
                },
                {
                    name: "Mon super titre 2",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample2.aac",
                },
                {
                    name: "Mon super titre 4",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample4.aac",
                },
                {
                    name: "Mon super titre 3",
                    description: "Ma super description",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                }
            ],
            effects: [
                {
                    name: "Effet 1",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 2",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 3",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 4",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 5",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 1",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 2",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 3",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 4",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 5",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 1",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 2",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 3",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 4",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
                {
                    name: "Effet 5",
                    image: assetsPath + "/img/placeholder.png",
                    file: assetsPath + "/sound/sample3.aac",
                },
            ]
        },
        {
            name: "Acte II",
            ambiances: [],
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
