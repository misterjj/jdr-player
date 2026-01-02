"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@workspace/ui/components/tabs";
import {Button} from "@workspace/ui/components/button";
import {ArrowLeftIcon} from "lucide-react";
import SoundList from "@/app/jdr/components/SoundList";
import {JSX, useState} from "react";
import Link from "next/link";
import SoundTracks, {IPlayedSound} from "@/app/jdr/components/SoundTracks";

export interface IJdrSound {
    name: string;
    description?: string;
    file: string;
    image: string;
}

export interface IJdrTab {
    name: string;
    ambiances: IJdrSound[];
    narrator: IJdrSound[];
    effects: IJdrSound[];
}

export interface IJdrPage {
    tabs: IJdrTab[];
}

export interface IJdrPageProps {
    jdrPage: IJdrPage;
}

export function JdrPage({jdrPage}: IJdrPageProps) {
    const [tracks, setTracks] = useState<IPlayedSound[]>([])

    const addToTracks = (track: IJdrSound) => {
        const newTrack: IPlayedSound = {
            ...track,
            instanceId: Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
        };
        setTracks([...tracks, newTrack]);
    }

    const removeFromTrack = (track: IPlayedSound) => {
        setTracks(tracks.filter((i) => i.instanceId !== track.instanceId));
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-svh">
            <Tabs defaultValue={jdrPage.tabs[0]?.name} className="grow w-full h-full px-5 pt-5 min-h-0">
                <div className="flex gap-5">
                    <Button variant="secondary" size="icon" className="cursor-pointer" asChild>
                        <Link href="/"><ArrowLeftIcon/></Link>
                    </Button>
                    <TabsList className="border-primary border-2">
                        {jdrPage.tabs.map(tab => {
                            return <TabsTrigger value={tab.name} key={tab.name}>{tab.name}</TabsTrigger>
                        })}
                    </TabsList>
                </div>
                <div className="w-full grow flex min-h-0">
                    <div className="w-2/3 flex min-h-0">
                        {jdrPage.tabs.map(tab => {
                            return <TabsContent value={tab.name} key={tab.name} className="flex grow min-h-0">
                                    <Pannel element={<SoundList sounds={tab.ambiances} addToTracks={addToTracks}/>}
                                            name="Ambiances"
                                            width="w-1/2"
                                    />
                                    <Pannel element={<SoundList sounds={tab.narrator} addToTracks={addToTracks}/>}
                                            name="Narrateur"
                                            width="w-1/2"/>
                                </TabsContent>
                        })}
                    </div>
                    <div className="w-1/3 flex min-h-0">
                        <Pannel width={"w-full"}
                                element={<SoundTracks tracks={tracks} removeFromTracks={removeFromTrack}/>}
                                name="Pistes"/>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}

interface IPannel {
    name: string;
    element: JSX.Element[] | JSX.Element;
    width: string
}

function Pannel({name, element, width}: IPannel) {
    return (
        <div className={`${width} flex flex-col pe-1 min-h-0`}>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center p-4">{name}</h3>
            <div className="grow overflow-y-auto pe-2">
                {element}
            </div>
        </div>
    )
}