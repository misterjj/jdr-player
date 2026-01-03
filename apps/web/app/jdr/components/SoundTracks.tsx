import {IJdrSound} from "@/app/jdr/components/jdrPage";
import {Slider} from "@workspace/ui/components/slider";
import Image from "next/image";
import {Pause, Play, Volume2, VolumeX, X} from "lucide-react";
import {useRef, useState} from "react";
import ReactPlayer from "react-player";
import {Button} from "@workspace/ui/components/button";

export interface IPlayedSound extends IJdrSound {
    instanceId: string;
}
export interface ISoundTracks {
    tracks: IPlayedSound[];
    removeFromTracks: (sound: IPlayedSound) => void;
}

export default function SoundTracks({tracks, removeFromTracks}: ISoundTracks) {
    return (
        <div className="flex flex-col min-h-full bg-zinc-800/90 p-2">
            {tracks.map((track) => {
                return <SoundTrack track={track} key={track.instanceId} removeFromTracks={removeFromTracks}/>
            })}
        </div>
    )
}

export interface ISoundTrack {
    track: IPlayedSound;
    removeFromTracks: (sound: IPlayedSound) => void;
}

export function SoundTrack({track, removeFromTracks}: ISoundTrack) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isSeeking, setIsSeeking] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);

    const playerRef = useRef<HTMLVideoElement>(null);

    const formatTime = (seconds: number) => {
        const date = new Date(seconds * 1000);
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes();
        const ss = date.getUTCSeconds().toString().padStart(2, '0');
        if (hh > 0) {
            return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`
        }
        return `${mm}:${ss}`;
    };

    const handleDurationChange = () => {
        const player = playerRef.current;
        if (!player) return;

        setDuration(player.duration)
    };

    const handleTimeUpdate = () => {
        const player = playerRef.current;
        // We only want to update time slider if we are not currently seeking
        if (!player) return;

        if (!player.duration) return;

        setPlayedSeconds(player.currentTime)

        if (!isSeeking) {
            setProgress(player.currentTime / player.duration)
        }
    };

    const handleSeek = (value: number[]) => {
        const percent = value[0] || 0
        setProgress(percent);

        if (playerRef.current) {
            playerRef.current.currentTime = percent * playerRef.current.duration;
        }
    };

    const handleSeeking = (value: boolean) => {
        setIsSeeking(value);
    }

    const handleVolume = (value: number[]) => {
        const percent = value[0] || 0
        setVolume(percent);
    };

    return (
        <div className="w-full bg-zinc-900/90 h-20 text-center select-none">
            <div className="hidden">
                <ReactPlayer
                    ref={playerRef}
                    src={track.file}
                    playing={isPlaying}
                    volume={volume}
                    onStart={() => setIsSeeking(false)}
                    onDurationChange={handleDurationChange}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => removeFromTracks(track)}
                    muted={isMuted}
                    config={{}}
                    controls={false}
                />
            </div>
            <div className="flex flex-col h-full">
                <Slider
                    value={[progress]}
                    onPointerDown={() => handleSeeking(true)}
                    max={1}
                    step={0.01}
                    onValueChange={handleSeek}
                    onValueCommit={(value: number[]) => {
                        handleSeek(value)
                        handleSeeking(false)
                    }}
                    className="w-full cursor-pointer"
                    disabled={!isPlaying}
                />
                <div className="flex items-center grow p-2">
                    <div className="grow">
                        <div className="flex items-center gap-2">
                            <div>
                                <Image
                                    src={track.image}
                                    alt={track.description || ""}
                                    width={60}
                                    height={60}
                                    className="aspect-square rounded object-cover"
                                />
                            </div>
                            <div className="flex-initial flex flex-col items-start">
                                <div className="font-semibold text-sm text-primary">{track.name}</div>
                                <div className="text-sm text-gray-300">
                                    {formatTime(playedSeconds)} / {formatTime(duration)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Button onClick={() => setIsPlaying(!isPlaying)} size={"icon"}>
                                {isPlaying ? <Pause size={40}/> : <Play size={40} className="ml-1"/>}
                            </Button>
                            <Button onClick={() => removeFromTracks(track)} size={"icon"} variant={"destructive"}>
                                <X/>
                            </Button>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-end gap-1">
                                <Slider
                                    className="w-16"
                                    value={[volume]}
                                    max={1}
                                    step={0.01}
                                    onValueChange={handleVolume}
                                />
                                {!isMuted && <Volume2 size={15} onClick={() => setIsMuted(true)}/>}
                                {isMuted && <VolumeX size={15} onClick={() => setIsMuted(false)}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}