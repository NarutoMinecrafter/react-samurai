import React, { useState } from 'react'
import s from './Paginator.module.css';


const Paginator = ({totalCount, pageSize, currentPage, pageChenget, portionSize}) => {

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
            return <samp
                className={currentPage === p && s.activePage}
                onClick={() => pageChenget(p)}
            >{p} </samp>
        })}
        <span> </span>
        {!(portionNumber > countPortion - 1) && <button onClick={() => setPortionNumber(portionNumber + 1)} >{'>'}</button>}
        <span> </span>
        {!(portionNumber > countPortion - 1) && <button onClick={() => setPortionNumber(countPortion)} >{'>>'}</button>}
    </>
}


export default Paginator