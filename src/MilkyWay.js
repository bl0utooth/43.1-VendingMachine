import React, { Component } from "react";
import { Link } from "react-router-dom";

function MilkyWay () {
    return (
        <div className="MilkyWay">
            <h1>Milky-Way</h1>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnU3bXRlNnJmb3E2YXVtZXMycXQ0d3J5eG5naWFsbmd6YzMybXlpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EioSLTY6EvHFkMnymp/giphy.gif" />
            <Link to="/"> Home </Link>
        </div>
    )
}

export default MilkyWay