/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Link from 'next/link';
import {IoArrowBackOutline} from 'react-icons/io5'

interface Props {
    title?: string;
}
export default function Header2({ title }: Props) {
    return (
        <nav css={{ height: 30, padding: 10, alignItems: 'center', display: 'flex',color: "#FAFAFA", justifyContent: 'space-between', backgroundColor: '#282c34' }}>

            <h3 css={{ color: '#FAFAFA', cursor: 'pointer' }}>{title}</h3>
            <div>
                <Link href={'/'}>
                    <span css={{ color: '#FAFAFA', cursor: 'pointer',display:'flex',alignItems:'center' }}> <IoArrowBackOutline/> &nbsp; Back</span>
                </Link>
            </div>
        </nav>
    )
}