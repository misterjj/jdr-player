"use client";

import {IJdrSound} from "@/app/jdr/components/jdrPage";
import Image from "next/image";
import {Plus} from "lucide-react";
import {Button} from "@workspace/ui/components/button";

export interface ISoundListProps {
    sounds: IJdrSound[],
    addToTracks: (sound: IJdrSound) => void;
}

export default function SoundList({sounds, addToTracks}: ISoundListProps) {
    return (
        <div className="flex flex-col gap-2 pb-4">
            {sounds.map((sound, i) => {
                return <div key={i} className="flex gap-2 bg-zinc-800/90 p-2 rounded">
                    <div>
                        <Image
                            src={sound.image}
                            alt={sound.name}
                            width={65}
                            height={65}
                            className="aspect-square rounded object-cover"
                        />
                    </div>
                    <div className="grow flex flex-col justify-center">
                        <div className="font-semibold">{sound.name}</div>
                        <div className="font-light text-sm text-gray-300">{sound.description}</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Button size="icon" onClick={() => addToTracks(sound)}>
                            <Plus/>
                        </Button>
                    </div>
                </div>
            })}
        </div>
    )
}