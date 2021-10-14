import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1> Product Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Weed</Link>
        </li>
        <li>
          <Link to='/products/p2'>LSD</Link>
        </li>
        <li>
          <Link to='/products/p3'>Crystal Meth</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
