import JdrPage, {IJdrPage} from "@/app/jdr/components/jdrPage";

const assetsPath = "/assets/okimba_caravane";

const page: IJdrPage = {
    tabs: [
        {
            name: "Acte I",
            ambiances: [
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
            narator: []
        },
        {
            name: "Acte II",
            ambiances: [],
            narator: []
        },
        {
            name: "Acte III",
            ambiances: [],
            narator: []
        },
        {
            name: "Acte IV",
            ambiances: [],
            narator: []
        }
    ]
}

export default function Page() {
    return (
        <JdrPage jdrPage={page}/>
    )
}
