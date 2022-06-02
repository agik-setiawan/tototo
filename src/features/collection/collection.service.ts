import { filter, find, findIndex, indexOf } from "lodash";

export const collections = () => {
    const data = localStorage.getItem('collections');
    if (data) {
        return JSON.parse(data)
    }
    return [];
}

export const setCollection = (collection: string) => {
    localStorage.setItem('collections', collection);
}

export const addCollection = (collection: string, animeList = []) => {
    // localStorage.removeItem('collections');
    if (!collections()) {
        setCollection(JSON.stringify([]));
    }
    const collect: any = collections();
    collect.push({ name: collection, key: new Date().getTime(), anime: animeList })
    setCollection(JSON.stringify(collect));
}

export const updateCollection = (key: any, collection: string, animeList = []) => {
    const collect: any = collections();
    const collectDiff = filter(collect, (item) => item.key !== key);
    const data = find(collect, (item) => item.key === key);
    collectDiff.push({ ...data, name: collection, anime: animeList });
    setCollection(JSON.stringify(collectDiff));
}

export const deleteCollection = (collection: string) => {
    // localStorage.removeItem('collections');
    if (!collections()) {
        setCollection(JSON.stringify([]));
    }
    const collect: any = collections();
    const newCollections = filter(collections(), (item) => {
        return item.key !== collection;
    })
    setCollection(JSON.stringify(newCollections));
}

export const findCollection = (collection: string) => {
    const collect: any = collections();
    return find(collect, { key: collection });
}
