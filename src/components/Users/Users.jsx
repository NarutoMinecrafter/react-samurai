import React from 'react'
import User from './User';
import Paginator from '../common/Paginator/Paginator';


const Users = (props) => {
    return (
        <div>
            USERS
            <div>
                <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} pageChenget={props.pageChenget} portionSize={10} />
            </div>
            {props.users.map(u => (<User u ={u} followingProgress={props.followingProgress} deleteFollow={props.deleteFollow} postFollow={props.postFollow}/>))}
        </div>
    )
}

export default Users