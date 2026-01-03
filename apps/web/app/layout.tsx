import {Manrope} from "next/font/google"

import "@workspace/ui/globals.css"
import {Providers} from "@/components/providers"
import InteractiveButton from "@/components/FullscreenButton";

const font = Manrope({
    subsets: ['latin']
})

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${font.className} antialiased dark`}
        >
        <InteractiveButton/>
        <div className="">
            <Providers>{children}</Providers>
        </div>
        </body>
        </html>
    )
}
