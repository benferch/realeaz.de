import React from 'react';
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div id="error-page">
            <div id="error">
                <h1>Error!</h1>
                <p>There was an error!</p> <br />
                <Link to="/" onClick={window.scrollTo(0, 0)}> &lsaquo;&lsaquo; back </Link>
            </div>
        </div>
    );
}

export default ErrorPage;