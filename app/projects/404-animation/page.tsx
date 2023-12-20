'use client'
import {Project} from "@/components/projects/Project"
import {Text} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import {useEffect, useState} from "react";

export default function NotFoundAnimation() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;

    return (
        <Project
            headerImg="404/404-header"
            projectLabel="2021 — Animation"
            projectName="404 Animation"
            projectFeatureText="Getting lost on the web isn&apos;t always bad."
            projectDescription={(
                <Text>
                    The WorkingMouse website underwent an official rebrand in 2020. As most rebrands go, it invites the
                    designer to play and explore the application. I had the pleasure of crafting the 404 page -
                    intending for an otherwise negative experience to hopefully spark joy to those who come across it. You can
                    check it out <Link href="https://workingmouse.com.au/404" textDecoration="underline">Live</Link>.
                </Text>
            )}
            nextPage={{
                name: 'Music controller',
                href: '/projects/music-controller',
            }}
        />
    )
}
