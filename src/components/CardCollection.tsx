/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export default function CardCollection({ title }:any) {
    return (
        <div css={{color:'#F1F5F9',padding:'10px 0 10px 0',":hover":{opacity:.8},cursor:'pointer'}}>
            <h4 css={{padding:'4px 0 4px'}}>{title}</h4>
        </div>
    )
}