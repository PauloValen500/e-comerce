import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        navigate("/login");
    };

    // 🔹 Cerrar el menú si se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-left" onClick={() => navigate("/catalogo")}>
                    <h1 className="navbar-logo">Raíz Oaxaca</h1>
                </div>

                <div className="navbar-right">
                    <button className="navbar-btn" onClick={() => navigate("/carrito")}>
                        <FaShoppingCart className="navbar-icon" /> Carrito
                    </button>

                    <div className="profile-menu" ref={menuRef}>
                        <button
                            className="navbar-btn profile-btn"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <FaUserCircle className="navbar-icon" /> Perfil
                        </button>

                        {menuOpen && (
                            <div className="dropdown">
                                <button onClick={() => navigate("/perfil")}>Perfil</button>
                                <button onClick={handleLogout}>Cerrar sesión</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );

}
