import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex h-24 items-center justify-between bg-slate-500 px-4 text-white">
      <div>
        <Link to="/">ShopApp</Link>
      </div>
      <ul className="flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <div>CART</div>
    </nav>
  );
}
