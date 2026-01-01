import {Tabs, TabsContent, TabsList, TabsTrigger} from "@workspace/ui/components/tabs";
import {Button} from "@workspace/ui/components/button";
import {Slider} from "@workspace/ui/components/slider";
import {ArrowLeftIcon, Pause, PauseCircle, Play, Volume2} from "lucide-react";
import SoundList from "@/app/jdr/components/SoundList";
import {JSX} from "react";
import Image from "next/image";
import SoundGrid from "@/app/jdr/components/SoundGrid";
import Link from "next/link";

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

export default function JdrPage({jdrPage}: IJdrPageProps) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-svh">
            <Tabs defaultValue={jdrPage.tabs[0]?.name} className="grow w-full h-full px-5 pt-5 min-h-0">
                <div className="flex gap-5">
                    <Button variant="secondary" size="icon" className="cursor-pointer">
                        <Link href="/"><ArrowLeftIcon/></Link>
                    </Button>
                    <TabsList className="border-primary border-2">
                        {jdrPage.tabs.map(tab => {
                            return <TabsTrigger value={tab.name} key={tab.name}>{tab.name}</TabsTrigger>
                        })}
                    </TabsList>
                </div>
                {jdrPage.tabs.map(tab => {
                    return <TabsContent value={tab.name} key={tab.name} className="flex flex-col grow min-h-0">
                        <div className="w-full grow flex min-h-0">
                            <Pannel element={<SoundList sounds={tab.ambiances}/>} name="Ambiances"/>
                            <Pannel element={<SoundList sounds={tab.narrator}/>} name="Narrateur"/>
                            <Pannel element={<SoundGrid sounds={tab.effects}/>} name="Effects"/>
                        </div>
                    </TabsContent>
                })}
            </Tabs>
            <div className="w-full bg-zinc-900 min-h-15 text-center">
                <div className="flex flex-col h-full">
                    <Slider defaultValue={[33]} max={100} step={1}/>
                    <div className="flex justify-center items-center grow">
                        <div className="w-1/3 ps-5">
                            <div className="flex items-center gap-2">
                                <div>
                                    <Image
                                        src="/assets/okimba_caravane/img/placeholder.png"
                                        alt="Current song"
                                        width={35}
                                        height={35}
                                        className="aspect-square rounded object-contain"
                                    />
                                </div>
                                <div className="flex-initial flex flex-col justify-center">
                                    <div className="font-semibold text-sm text-primary">Current song name</div>
                                    <div className="font-light text-xs text-gray-500">Current song description</div>
                                </div>
                                <div className="text-sm text-gray-300">
                                    0:30 / 1:45
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <Pause size={40}/>
                            {/*<Play size={40}/>*/}
                        </div>
                        <div className="w-1/3 pe-5">
                            <div className="flex items-center justify-end gap-1">
                                <Slider className="w-20" defaultValue={[33]} max={100} step={1}/>
                                <Volume2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface IPannel {
    name: string;
    element: JSX.Element[] | JSX.Element;
}

function Pannel({name, element}: IPannel) {
    return (
        <div className="w-1/3 flex flex-col pe-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center p-4">{name}</h3>
            <div className="grow overflow-y-auto pe-2">
                {element}
            </div>
        </div>
    )
}