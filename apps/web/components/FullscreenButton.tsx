'use client';

import {Button} from "@workspace/ui/components/button";
import {Maximize, Minimize} from "lucide-react";
import {useEffect, useState} from "react";

export default function InteractiveButton() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleClick = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <Button onClick={handleClick} size="icon" className="absolute right-5 top-5">
            {!isFullscreen ? <Maximize/> : <Minimize/>}
        </Button>
    );
}