import {Fragment} from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Evolution',
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