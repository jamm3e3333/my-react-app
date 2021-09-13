import classes from './UserProfile.module.css';

const UserProfile = props => {
  return (
    <main className={classes.profile}>
      <h2>My user profile</h2>
      <p>{props.email}</p>
    </main>
  );
};

export default UserProfile;
