import { Link } from "react-router-dom";

const Header = () => {
    return <header className="header">
        <Link to="/">
            <h1 className="logo">
                <img src="/images/logo.svg" alt="is it cookie?" />
            </h1>
        </Link>

    </header>
}

export default Header