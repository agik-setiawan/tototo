/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
``
import { AnimeModel } from "../models/anime.model";

export default function CardAnime({ title, id, bannerImage }: AnimeModel) {
    return (
        <div css={{color:'#F1F5F9',padding:'10px 0 10px 0',":hover":{opacity:.8},cursor:'pointer'}}>
            <div>
                <img src={bannerImage} alt="" css={{width:'100%'}}/>
            </div>
            <h4 css={{padding:'4px 0 4px'}}>{title?.romaji}</h4>
        </div>
    )
}