/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loading";
import { GET_ALL_ANIME } from "../../Graphql/Queries";

interface Detail {
    id: number
}
export default function DetailAnime({ id }: Detail) {

    const { data, error, refetch, loading } = useQuery(GET_ALL_ANIME, {
        variables: {
            id
        }
    });

    const detail = data?.Page?.media;

    return (
        <div>
            {
                loading &&
                <Loading />
            }
            {
                detail &&
                <div css={{ color: '#F1F5F9', padding: '10px 0 10px 0', margin: '5px 0 5px 0' }}>
                    <img src={detail[0].bannerImage} css={{ width: '100%' }} />
                    <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 css={{ padding: '4px 0 4px' }}>{detail[0].title?.romaji}</h4>
                        <span>Episodes: {detail[0].episodes}</span>
                    </div>
                    <div>
                        <small>Genres</small>: {
                            detail[0].genres?.map((item: any) => {
                                return (
                                    <small key={item} css={{ padding: '0 2px 0 2px' }}>{item},</small>
                                )
                            })
                        }
                    </div>
                    <div css={{ margin: '4px 0 4px 0' }}>
                        <small>Season : {detail[0].season}</small>
                    </div>
                    <div css={{ margin: '4px 0 4px 0' }}>
                        <small>Season Year: {detail[0].seasonYear}</small>
                    </div>
                    <div css={{ margin: '4px 0 4px 0' }}>
                        <small>Type : {detail[0].type}</small>
                    </div>
                   
                </div>
            }
        </div>
    )
}