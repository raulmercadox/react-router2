import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from '../lib/api';
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const Quotes = () => {
    const {sendRequest, status, data: allQuotes, error} = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);


    if (status === 'pending')
    {
        return <div className="centered"><LoadingSpinner/></div>;
    }

    if (error)
    {
        return <div className="centered">{error}</div>
    }

    if (status === 'completed' && allQuotes.length === 0)
    {
        return <NoQuotesFound/>
    }

    return <QuoteList quotes={allQuotes}/>
}

export default Quotes;
