import {useParams, useRouteMatch,Route, Link} from 'react-router-dom'
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
    const match = useRouteMatch();
    console.log(match);
    if (!quote)
    {
        return <div>Quote not found</div>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path={match.path} exact>
            <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}>
                    Comments
                </Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments/>
        </Route>
    </Fragment>
}

export default QuoteDetail;