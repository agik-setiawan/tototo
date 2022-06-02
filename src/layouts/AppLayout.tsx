/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Header from '../components/Header';
export const layoutStyle = css({
    maxWidth: 500,
    minHeight: '100vh',
    backgroundColor: '#282c34'
});

export default function AppLayout({ children }: any) {
    return (
        <div css={layoutStyle}>
            <Header />
            <div css={{padding:20}}>
                {children}
            </div>
        </div>
    )
}