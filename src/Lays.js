import React, { Component } from "react";
import { Link } from "react-router-dom";

function Lays () {
    return (
        <div className="Lays">
            <h1>Lays</h1>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnV0cnZjb2Jrd3p4dnF4ZTQwMDJjMmRhcnQ4a251M2lueGQ0dm0xYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AadRVCiTzMfJWFVYn1/giphy.gif" />
            <Link to="/"> Home </Link>
        </div>
    )
}

export default Lays