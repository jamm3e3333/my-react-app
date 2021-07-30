import Card from '../UI/Card';
import classes from './UsersList.module.css';
import UserItem from './UserItem';

const UsersList = (props) => {
    
    return (
        <div>
        {props.users.length > 0 && <Card className={classes.users}>
            <ul>
                {props.users.map((user) => {
                    return (
                        <UserItem deleteUser={props.onDeleteUser} 
                            key={user.id} id={user.id}>
                                {user.username}, {user.age} years old
                        </UserItem>
                        ) 
                })}
            </ul>
        </Card>}
        </div>
    )
}

export default UsersList;