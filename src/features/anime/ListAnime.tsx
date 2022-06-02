import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardAnime from "../../components/CardAnime";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { GET_ALL_ANIME } from "../../Graphql/Queries"
import { AnimeModel } from "../../models/anime.model";
import { setAnimeList, setPage } from "./anime.slice";


export default function ListAnime() {
    const dispatch = useDispatch();
    const [curentPage, setCurentPage] = useState(1);
    const [perPage, setPerPage] = useState(10)
    const { data, error, refetch, loading } = useQuery(GET_ALL_ANIME, {
        variables: {
            page: curentPage,
            perPage: perPage
        }
    });
    const [listAnime, setListAnime] = useState([]);
    const [pageInfo, setPageInfo]: any = useState({});

    useEffect(() => {
        if (data) {
            if (data.Page) {
                if (data.Page.media) {
                    setListAnime(data.Page.media);
                    dispatch(setAnimeList(data.Page.media));
                }
                if (data.Page.pageInfo) {
                    setPageInfo(data.Page.pageInfo);
                    dispatch(setPage({ perPage: data.Page.pageInfo.perPage, page: data.Page.pageInfo.curentPage }))
                }
            }
        }
    }, [data])
    return (
        <div>
            {
                loading &&
                <Loading />
            }
            {
                !loading &&
                <div>
                    {
                        listAnime?.map((item: AnimeModel) => {
                            return (
                                <div key={item.id}>
                                    <CardAnime {...item} />
                                </div>
                            )
                        })
                    }
                    <Pagination pageInfo={pageInfo} setNext={() => {
                        setCurentPage(curentPage + 1);
                        refetch({
                            page: curentPage,
                            perPage
                        })
                    }}
                        setPrev={() => {
                            setCurentPage(curentPage - 1);
                            refetch({
                                page: curentPage,
                                perPage
                            })
                        }}
                        setPage={(page: number) => {
                            setCurentPage(page);
                            refetch({
                                page: curentPage,
                                perPage
                            })
                        }}
                    />
                </div>
            }
        </div>
    )
}