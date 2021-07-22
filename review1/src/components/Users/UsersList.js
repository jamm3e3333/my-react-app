import Card from '../UI/Card';
import classes from './UsersList.module.css';
import UserItem from './UserItem';

const UsersList = (props) => {
    
    return (
        <Card className={classes.users}>
            <ul>
                {props.users && props.users.map((user) => {
                    return (
                        <UserItem deleteUser={props.onDeleteUser} 
                            key={user.id} id={user.id}>
                                {user.username}, {user.age} years old
                        </UserItem>
                        ) 
                })}
            </ul>
        </Card>
    )
}

export default UsersList;