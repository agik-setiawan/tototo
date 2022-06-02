/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

const pageNumber = { padding: '0 10px 0 10px', cursor: 'pointer' };
const nextPref = { cursor: 'pointer', ":hover": { opacity: .8 } }

interface PaginationProps {
    setNext?: any;
    setPrev?: any,
    setPage?: any,
    pageInfo: {
        total: number;
        currentPage: number;
        lastPage: number;
        hasNextPage: boolean;
        perPage: number;
    }
}

export default function Pagination({ setNext, setPrev, pageInfo, setPage }: PaginationProps) {

    const page = [];
    for (let index = 0; index < 4; index++) {
        if(!isNaN(pageInfo?.currentPage)){
            page.push(pageInfo?.currentPage + index)
        }
    }
    return (
        <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F1F5F9', margin: '20px 0 20px 0' }}>
            <div css={{ ...nextPref }} onClick={() => {
                if (pageInfo?.currentPage ?? 1 > 2) {
                    setPrev()
                }

            }}>
                <FiArrowLeftCircle size={30} />
            </div>
            <div css={{ display: 'flex' }}>
                <span css={{ ...pageNumber, color: pageInfo?.currentPage == 1 ? 'red' : '' }} onClick={() => { setPage(1) }}>1</span>
                {
                    pageInfo.currentPage > 1 &&
                    <span css={pageNumber}>..</span>
                }
                {
                    page.map((item) => {
                        return (
                            <span key={item}>
                                {
                                    item !== 1 &&
                                    <span css={{ ...pageNumber, color: pageInfo?.currentPage == item ? 'red' : '' }} onClick={() => { setPage(item) }}>{item}</span>
                                }
                            </span>
                        )
                    })
                }
                <span css={pageNumber}>..</span>
                <span css={{ ...pageNumber, color: pageInfo?.currentPage == pageInfo?.lastPage ? 'red' : '' }} onClick={() => { setPage(pageInfo?.lastPage) }}>{pageInfo?.lastPage}</span>
            </div>
            <div css={nextPref} onClick={() => { setNext() }}>
                <FiArrowRightCircle size={30} />
            </div>
        </div>
    )
}