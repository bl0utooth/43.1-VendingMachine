import React, { Component } from "react";
import { Link } from "react-router-dom";

function CocaCola () {
    return (
        <div className="Cola">
            <h1>Coca-Cola</h1>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWd2NDM2YjE0ZHR1dTZuYnczaTJ5OTA5dDRqdDFzbjZzZmFvc3Y2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72FhzTRUrcEZZh5u/giphy.gif" alt="Coca-Cola" />
            <Link to='/'> Home </Link>
        </div>
    )
}

export default CocaCola