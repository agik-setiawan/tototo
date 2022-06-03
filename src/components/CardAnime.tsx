/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Link from 'next/link';
``
import { AnimeModel } from "../models/anime.model";

export default function CardAnime({ title, id, bannerImage, genres, episodes }: AnimeModel) {
    return (
        <span>
            <Link href={`/detail/${id}`}>
                <div css={{ color: '#F1F5F9', padding: '10px 0 10px 0', margin: '5px 0 5px 0', ":hover": { opacity: .8 }, cursor: 'pointer' }}>
                    <div>
                        <img src={bannerImage} alt="" css={{ width: '100%' }} />
                    </div>
                    <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 css={{ padding: '4px 0 4px' }}>{title?.romaji}</h4>
                        <span>Episodes: {episodes}</span>
                    </div>
                    <div>
                        <small>Genres</small>: {
                            genres?.map((item) => {
                                return (
                                    <small key={item} css={{ padding: '0 2px 0 2px' }}>{item},</small>
                                )
                            })
                        }
                    </div>
                </div>
            </Link>
        </span>
    )
}