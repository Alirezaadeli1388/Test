import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "../style/Site Icon.png";

function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                headerRef.current?.classList.add("scrolled");
            } else {
                headerRef.current?.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="header" ref={headerRef}>
            <Link to="/" className="txt-decor color-black">
                <div className="Logo-title">
                    <img src={Logo} alt="site logo" />
                    <h2>LearnPlus</h2>
                </div>
            </Link>
            <div className="button-container">
                <Button secondary>ورود</Button>
                <Button primary>ثبت نام</Button>
            </div>
        </div>
    );
}

export default Header;
