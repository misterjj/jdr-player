import {Tabs, TabsContent, TabsList, TabsTrigger} from "@workspace/ui/components/tabs";
import {Button} from "@workspace/ui/components/button";
import {ArrowLeftIcon} from "lucide-react";
import SoundList from "@/app/jdr/components/SoundList";

export interface IJdrSound {
    name: string;
    description: string;
    file: string;
    image: string;
}

export interface IJdrTab {
    name: string;
    ambiances: IJdrSound[]
    narator: IJdrSound[]
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
                        <ArrowLeftIcon />
                    </Button>
                    <TabsList>
                        {jdrPage.tabs.map(tab => {
                            return <TabsTrigger value={tab.name} key={tab.name}>{tab.name}</TabsTrigger>
                        })}
                    </TabsList>
                </div>
                {jdrPage.tabs.map(tab => {
                    return <TabsContent value={tab.name} key={tab.name} className="flex flex-col grow min-h-0">
                        <div className="w-full grow flex min-h-0 gap-4">
                            <div className="w-1/3 overflow-y-auto flex flex-col">
                                <div className="text-center text-2xl font-bold p-4">Ambiance</div>
                                <div className="grow">
                                    <SoundList sounds={tab.ambiances} />
                                </div>
                            </div>
                            <div className="w-1/3 overflow-y-auto flex flex-col">
                                <div className="text-center text-2xl font-bold p-4">Narateur</div>
                                <div className="grow">
                                    <SoundList sounds={tab.narator} />
                                </div>
                            </div>
                            <div className="w-1/3 overflow-y-auto flex flex-col">
                                <div className="text-center text-2xl font-bold p-4">Effets</div>
                                <div className="grow">
                                    {[...Array(100).keys()].map(i => <div key={i} className="">{i}</div>)}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                })}
            </Tabs>
            <div className="w-full bg-green-800">
                lecteur
            </div>
        </div>
    )
}