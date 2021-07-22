import React from 'react';
import UserItem from './UserItem';

const UserView = (props) => {

    return (
        <ul>
            {props.item.map((user) => {
                return (
                    <UserItem 
                        deleteUser={props.deleteUser} 
                        id={user.id} 
                        key={user.id}>
                            
                        <p>{user.username}</p>
                        <p>{user.age}</p>
                    </UserItem> 
                )
            })}
        </ul>
     
    )
}

export default UserView;