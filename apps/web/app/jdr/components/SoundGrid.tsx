import {IJdrSound} from "@/app/jdr/components/jdrPage";
import Image from "next/image";
import {Play} from "lucide-react";
import {Button} from "@workspace/ui/components/button";

export interface ISoundGridProps {
    sounds: IJdrSound[]
}

export default function SoundGrid({ sounds }: ISoundGridProps) {
    return (
        <div className="flex gap-5 flex-wrap justify-around">
            {sounds.map((sound, i) => {
                return <div key={i} className="flex flex-col justify-center items-center gap-2">
                    <div>
                        <Image
                            src={sound.image}
                            alt={sound.name}
                            width={100}
                            height={100}
                            className="aspect-square rounded-full object-contain"
                        />
                    </div>
                    <div className="grow flex flex-col justify-center">
                        <div className="font-semibold">{sound.name}</div>
                        <div className="font-light text-sm text-gray-300">{sound.description}</div>
                    </div>
                </div>
            })}
        </div>
    )
}