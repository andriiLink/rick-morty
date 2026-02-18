import Link from "next/link";

import { NAV_ITEMS } from "../constants/navigationItems";

const NavBar = () => {
  return (
    <nav className="mx-4">
      <ul>
        {NAV_ITEMS.map((navItem) => {
          return (
            <li key={navItem.href}>
              <Link href={navItem.href}>{navItem.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
