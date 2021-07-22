const UserItem = (props) => {
    const onDeleteUser = () => {
        props.deleteUser(props.id);
    }

    return (
        <li onClick={onDeleteUser}>
            {props.children}
        </li>
    )
}

export default UserItem;