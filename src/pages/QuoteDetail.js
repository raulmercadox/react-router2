import {useParams, Route} from 'react-router-dom'
import React, {Fragment} from 'react';
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();

    return <Fragment>
        <h1>Quote Detail {params.quoteId}</h1>
        <Route path="/quotes/:quoteId/comments">
            <Comments/>
        </Route>
    </Fragment>
}

export default QuoteDetail;