import {useParams, Route} from 'react-router-dom'
import React, {Fragment} from 'react';
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 1, author: "Raul Mercado", text:"Todo se puede con esfuerzo"},
    {id: 2, author: "Juan Perez", text:"A vivir la vida loca"},
]

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(q => q.id === Number(params.quoteId));
    if (!quote)
    {
        return <div>Quote not found</div>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path="/quotes/:quoteId/comments">
            <Comments/>
        </Route>
    </Fragment>
}

export default QuoteDetail;