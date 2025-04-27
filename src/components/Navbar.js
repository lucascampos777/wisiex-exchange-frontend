import { useState } from "react";
import { useAuth } from "../contexts/authContext"

export const Navbar = () => {
    const auth = useAuth();
    const [menuOpen, setMenuOpen] = useState(false)

    const triggerMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const logout = () => {
        auth.logout();
    }

    return (
        <nav className="navbar has-background-light mb-5" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <img src="logo.png" alt="logo" className="image is-64x64"/>
                <a className="navbar-item" href="/">
                    <strong>Wisiex Exchange</strong>
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className={`dropdown ${menuOpen && "is-active"}`}>
                        <div className="dropdown-trigger">
                            <div className="is-flex is-align-items-center user-hover" onClick={triggerMenu}>
                                <figure className="image is-32x32 mr-2">
                                    <img
                                        className="is-rounded"
                                        src="https://i.pravatar.cc/32"
                                        alt="User avatar"
                                    />
                                </figure>
                                <span><strong>{auth.user}</strong></span>
                            </div>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a className="dropdown-item" onClick={logout}> Logout </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}