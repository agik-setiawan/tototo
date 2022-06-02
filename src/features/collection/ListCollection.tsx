/** @jsxRuntime classic */
/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { jsx, css } from '@emotion/react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { filter, find, omit } from 'lodash';
import { useEffect, useState } from 'react'

import { AiOutlineClose, AiOutlinePlusSquare } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { GET_ALL_ANIME } from '../../Graphql/Queries';
import { AnimeModel } from '../../models/anime.model';
import { RootState } from '../../store';
import { setAnimeList, setPage } from '../anime/anime.slice';
import { addCollection, collections, deleteCollection, findCollection, updateCollection } from './collection.service';
export default function ListCollection() {
    
    const dispatch = useDispatch();
    const pageState = useSelector((state: RootState) => state.anime.page);


    const { data, error, refetch, loading } = useQuery(GET_ALL_ANIME, {
        variables: {
            page: pageState.page,
            perPage: pageState.perPage
        }
    });

    useEffect(() => {
        refetch();
    }, [pageState])

    // useEffect(() => {
    //     if (data) {
    //         if (data.Page) {
    //             if (data.Page.media) {
    //                 dispatch(setAnimeList(data.Page.media));
    //             }
    //         }
    //     }
    // }, [data])


    const [open, setOpen] = useState(false);
    const [listCollections, setListCollections] = useState(collections());
    const [collectionName, setCollectionName] = useState('New Collection ' + (listCollections.length + 1));
    const [curentCollection, setCurentCollection]: any = useState({});
    const [select, setSelect] = useState(0)
    const [animes, setAnimes]: any = useState([]);
    const [modalType, setModalType] = useState('add');

    const animeList = useSelector((state: RootState) => state.anime.animeList.filter((item: any) => {
        if (animes.length >= 1) {
            return !animes.some((item2: any) => {
                return item2.id === item.id;
            })
        }
        return true;
    }));

    useEffect(() => {
        // console.log('abc', listCollections);
    }, [])

    const submitCollection = () => {
        if (modalType == 'add') {
            const checkCollection = find(listCollections, { name: collectionName });
            if (checkCollection) {
                Swal.fire(
                    'Error',
                    'Collection name canot same with other!',
                    'warning'
                )
            } else {
                addCollection(collectionName, animes);
                setCollectionName('New Collection ' + (collections().length + 1))
            }

        } else if (modalType == 'edit') {
            updateCollection(curentCollection.key, collectionName, animes);
        }
        setOpen(false);
        setListCollections(collections())

    }

    const deleteCollect = (name: any) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Your collection will be delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                deleteCollection(name);
                setListCollections(collections())
                Swal.fire(
                    'Deleted!',
                    'Your collection has been deleted.',
                    'success'
                )
            }
        })


    }

    const edit = (key: any) => {
        setModalType('edit');
        const collect: any = findCollection(key);
        setCurentCollection(collect);
        if (collect) {
            setCollectionName(collect.name);
            setAnimes(collect.anime);
        }
        setOpen(true);
    }

    const removeAnime = (keyCollection: any, animeId: any) => {
        const newAnime = filter(animes, (item) => item.id !== animeId);
        setAnimes(newAnime);
    }

    const selectAnime = (anime: any) => {
        if (anime !== 0) {
            const anim: any = find(animeList, { id: anime });
            if (anim) {
                // console.log('abc',omit(anim,['__typename']))
                const data = animes;
                data.push(anim)
                setAnimes(data);
                // console.log('abc', animes)
                // setSelect(0);
            }
        }

    }

    return (

        <div>
            <Dialog open={open} onClose={() => { setOpen(false) }} fullWidth css={{ maxWidth: 500, margin: '0 auto 0 auto' }}>
                <DialogTitle>
                    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span><span css={{ textTransform: 'capitalize' }}>{modalType}</span> Collection</span>
                        <span css={{ cursor: 'pointer' }} onClick={() => { setOpen(false) }}><AiOutlineClose /></span>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        value={collectionName}
                        autoFocus
                        margin="dense"
                        id="collection_name"
                        label="Collection Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onInput={(e: any) => { setCollectionName(e.target.value) }}
                    />
                    <div css={{ margin: '20px 0 20px' }}>
                        <Select css={{ width: '100%' }}
                            value={select}
                            onChange={(e: any) => {
                                setSelect(e.target.value)
                                selectAnime(e.target.value);
                            }}
                        >
                            <MenuItem value={0}>Select Anime</MenuItem>
                            {
                                animeList?.map((item: AnimeModel) => {
                                    return (
                                        <MenuItem value={item.id}>{item?.title?.romaji}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </div>

                    <div css={{ margin: '10px 0 10px 0' }}>
                        {
                            animes?.map((item: AnimeModel) => {
                                return (
                                    <div key={item.id} css={{ padding: '5px 0 5px 0', margin: '5px 0 5px 0', display: 'flex' }}>
                                        <div>
                                            <img src={item.bannerImage} alt="" css={{ width: '100%' }} />
                                            <h4>{item.title?.romaji}</h4>
                                        </div>
                                        <div>
                                            <span css={{ cursor: 'pointer' }} onClick={() => { removeAnime(curentCollection?.key ?? null, item.id) }}><AiOutlineClose size={20} /></span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div css={{ marginTop: 20 }}>
                        <Button variant="contained" onClick={submitCollection}>
                            Submit
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
            <div css={{ color: '#F1F5F9', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
                setOpen(true)
                setModalType('add');
                setAnimes([])
            }}>Add Collection &nbsp; <AiOutlinePlusSquare size={24} /></div>

            <div css={{ marginTop: 20 }}>
                {
                    listCollections?.map((item: any) => {
                        return (
                            <div css={{ color: 'white', display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0', padding: '10px 0 10px 4px', backgroundColor: '#6B7280' }} key={item.key}>
                                <span> {item.name}</span>
                                <div>
                                    <span css={{ cursor: 'pointer', padding: '0 5px 0 5px' }} onClick={() => { edit(item.key) }}><BsFillPencilFill /></span>
                                    <span css={{ cursor: 'pointer', padding: '0 5px 0 5px' }} onClick={() => { deleteCollect(item.key) }}><AiOutlineClose /></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}