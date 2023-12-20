import {Fragment} from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'TOOL-KIT',
    description: 'JOJO banks',
}

export default function Layout({children}: {
    children: React.ReactNode
}) {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}