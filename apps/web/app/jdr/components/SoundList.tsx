import {IJdrSound} from "@/app/jdr/components/jdrPage";
import Image from "next/image";
import {Play} from "lucide-react";

export interface ISoundListProps {
    sounds: IJdrSound[]
}

export default function SoundList({ sounds }: ISoundListProps) {
    return (
        <div className="flex flex-col gap-4 px-4 pb-4">
            {sounds.map((sound, i) => {
                return <div key={i} className="flex gap-2">
                    <div>
                        <Image
                            src={sound.image}
                            alt={sound.name}
                            width={75}
                            height={75}
                            className="aspect-square w-full rounded-sm object-contain"
                        />
                    </div>
                    <div className="grow flex flex-col justify-center">
                        <div className="font-bold">{sound.name}</div>
                        <div className="font-light">{sound.description}</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Play size={40} />
                    </div>
                </div>
            })}
        </div>
    )
}