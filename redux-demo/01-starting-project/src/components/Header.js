import classes from './Header.module.css';

const Header = props => {
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { props.authenticated &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={props.logOut}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
