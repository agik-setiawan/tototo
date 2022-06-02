/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Header from '../components/Header';
export const layoutStyle = css({
    minHeight: '100vh',
    backgroundColor: '#F1F5F9'
});

export default function SiteLayout({ children }: any) {
    return (
        <div css={layoutStyle}>
            <div css={{padding:20}}>
                {children}
            </div>
        </div>
    )
}