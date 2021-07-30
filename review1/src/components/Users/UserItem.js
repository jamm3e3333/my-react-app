const UserItem = (props) => {

    const deleteUser = () => {
        return props.deleteUser(props.id);
    }
    return (
        <li onClick={deleteUser}>
            {props.children}
        </li>
    )
}

export default UserItem;