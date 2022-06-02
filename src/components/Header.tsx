/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Link from 'next/link';

export default function Header() {
    return (
        <nav css={{ height: 60, padding: 20, alignItems: 'center', display: 'flex', borderBottom: '2px solid #FAFAFA', color: "#FAFAFA", justifyContent: 'space-between', backgroundColor: '#282c34' }}>

            <Link href={'/'}>
                <h1 css={{ color: '#FAFAFA',cursor:'pointer' }}>Anime Lists</h1>
            </Link>
            <div>
                <Link href={'/collection'}>
                    <span css={{ color: '#FAFAFA',cursor:'pointer' }}> My Collection</span>
                </Link>
            </div>
        </nav>
    )
}