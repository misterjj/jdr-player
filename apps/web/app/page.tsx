import Image from "next/image"
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemHeader,
    ItemTitle,
    ItemActions
} from "@workspace/ui/components/item";
import {ChevronRightIcon} from "lucide-react";
import Link from "next/link";

const models = [
    {
        name: "OKIMBA | Carvane",
        image: "/assets/okimba_caravane/cover.jpg",
        link: "/jdr/okimba_caravane",
    },
]

export default function Page() {
    return (
        <div className="min-h-svh px-5">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold my-4">List des JDR</h1>
                <ItemGroup className="grid grid-cols-5 gap-4">
                    {models.map((model) => (
                        <Item key={model.name} variant="outline" size="sm" asChild>
                            <Link href={model.link}>
                                <ItemHeader>
                                    <Image
                                        src={model.image}
                                        alt={model.name}
                                        width={316}
                                        height={316}
                                        className="aspect-square w-full rounded-sm object-contain"
                                    />
                                </ItemHeader>
                                <ItemContent>
                                    <div className="text-2xl text-center">{model.name}</div>
                                </ItemContent>
                            </Link>
                        </Item>
                    ))}
                </ItemGroup>
            </div>
        </div>
    )
}
