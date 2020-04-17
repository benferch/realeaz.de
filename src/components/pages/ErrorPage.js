import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ErrorPage() {
    return (
        <>
            <Helmet>
                <title>Error &#124; Ben Ferch</title>
            </Helmet>
            <div id="error-page">
                <div id="error">
                    <h1>Error!</h1>
                    <p>There was an error!</p> <br />
                    <Link to="/" onClick={window.scrollTo(0, 0)}> &lsaquo;&lsaquo; back </Link>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;