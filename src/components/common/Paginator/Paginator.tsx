import React, { useState } from 'react'
import s from './Paginator.module.css'

type PropsType = {  
    totalCount: number
    pageSize: number
    currentPage: number
    pageChenget: (pageNumber: number) => void
    portionSize: number
}

const Paginator: React.FC<PropsType> = ({totalCount, pageSize, currentPage, pageChenget, portionSize}) => {

    let countPage = Math.ceil(totalCount / pageSize)

    let pages = []
    for (let i = 1; i <= countPage; i++) {
        pages.push(i)
    }
    
    let countPortion = Math.ceil(countPage / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1
    let rightPortionBorder = portionNumber * portionSize

    return <>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(1)} >{'<<'}</button>}
        <span> </span>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} >{'<'}</button>}
        <span> </span>
        {pages.filter(p => p >= leftPortionBorder && p <= rightPortionBorder )
        .map(p => {
            return <span
                className={currentPage === p ? s.activePage : undefined}
                onClick={() => pageChenget(p)}
                key={p}
            >{p} </span>
        })}
        <span> </span>
        {!(portionNumber > countPortion - 1) && <button onClick={() => setPortionNumber(portionNumber + 1)} >{'>'}</button>}
        <span> </span>
        {!(portionNumber > countPortion - 1) && <button onClick={() => setPortionNumber(countPortion)} >{'>>'}</button>}
    </>
}


export default Paginator