import Image from "next/image"
import Link from "next/link";
import {Button} from "@workspace/ui/components/button";
import {ArrowRightIcon} from "lucide-react";

const models = [
    {
        name: "OKIMBA",
        description: "Carvane",
        image: "/assets/okimba_caravane/cover.png",
        link: "/jdr/okimba_caravane",
    }
]

export default function Page() {
    return (
        <div className="min-h-svh px-5">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold my-20">Mes campagnes / scénario JDR</h1>
                <div className="grid grid-cols-2 gap-4">
                    {models.map((model, i) => (
                        <Link key={i} href={model.link} className="flex aspect w-100 bg-white rounded-lg overflow-hidden">
                            <div className="w-1/3">
                                <Image
                                    src={model.image}
                                    alt={model.name}
                                    width={316}
                                    height={316}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-2/3 text-black flex flex-col justify-end p-2 ">
                                    <div className="text-2xl font-bold leading-none">{model.name}</div>
                                    <div className="text-muted leading-none">{model.description}</div>
                                    <div className="flex justify-end pt-2"><Button size="icon"><ArrowRightIcon /></Button></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
