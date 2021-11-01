import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <section>
            <h1>Welcome to products page.</h1>
            <ul>
                <li><Link to='/products/book'>Book</Link></li>
                <li><Link to='/products/cds'>CDs</Link></li>
                <li><Link to='/products/movies'>Movies</Link></li>
            </ul>
        </section>
        
    )
}

export default Products;