import {useParams, useRouteMatch,Route, Link} from 'react-router-dom'
import React, {Fragment, useEffect} from 'react';
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {

    const {sendRequest, status, data: quote, error} = useHttp(getSingleQuote, true);
    const params = useParams();
    const quoteId = params.quoteId;

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest]);


    // const quote = DUMMY_QUOTES.find(q => q.id === Number(params.quoteId));
    const match = useRouteMatch();
    // console.log(match);
    if (status === 'pending')
    {
        return <div className="centered"><LoadingSpinner/></div>;
    }

    if (status === 'completed' && !quote)
    {
        return <div>Quote not found</div>
    }

    if (error)
    {
        return <div className="centered">{error}</div>
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