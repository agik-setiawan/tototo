/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Header from '../components/Header';
export const layoutStyle = css({
    maxWidth: 500,
    minHeight: '100vh',
    backgroundColor: '#282c34',
    margin: '0 auto 0 auto'
});

export default function SiteLayout({ children }: any) {
    return (
        <div css={layoutStyle}>
            <div css={{ padding: 20 }}>
                {children}
            </div>
        </div>
    )
}