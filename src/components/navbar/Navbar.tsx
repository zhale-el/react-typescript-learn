import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between flex-row-reverse items-center h-16 px-12 rounded-md border-b shadow-md text-lg text-blue-50 bg-slate-700">
        <ul className="flex flex-row-reverse">
          <li className="mx-9">
            <Link to="/"> خانه</Link>
          </li>
          <li>
            <Link to="/store">فروشگاه</Link>
          </li>
        </ul>
        <div>
          <button>سبد خرید</button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
