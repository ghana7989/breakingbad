import React from "react";

const Footer = () => {

    return (
        <div style={{ bottom: 10, left: 10, width: "inherit", backgroundColor: "#fa0", color: "#222", height: 30, display: "flex", justifyContent: "space-around", position: "fixed", alignItems: "center", border: 0, borderRadius: 5 }}>
            <a style={{ textDecoration: "none", fontSize: 16, color: "#222", padding: 16 }} href="#">Click Here for source code</a>
        </div>
    )
}
export default Footer;