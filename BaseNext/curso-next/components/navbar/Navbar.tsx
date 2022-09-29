import navbarStyles from "./Navbar.module.css"
import {ActiveLink} from "./ActiveLink";

export const Navbar = () => {
    return (
        <nav className={navbarStyles.menu_container}>
            <ActiveLink href="/" text="Home"/>
            <ActiveLink href="/about" text="About"/>
            <ActiveLink href="/contact" text="Contact"/>
            <ActiveLink href="/pricing" text="Pricing"/>
        </nav>
    );
};