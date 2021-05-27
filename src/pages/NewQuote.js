import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from 'react-router-dom';
import useHttp from '../hooks/use-http';
import {addQuote} from "../lib/api";
import {useEffect} from "react";

const NewQuote = () => {
    const history = useHistory();
    const {sendRequest, status} = useHttp(addQuote, false);

    useEffect(() => {
        if (status === 'completed')
        {
            history.push('/quotes');
        }
    }, [history, status]);

    const addQuoteHandler = (quote) => {
        // console.log(quote);
        sendRequest(quote);
    }
    return <QuoteForm isLoading={status} onAddQuote={addQuoteHandler} />
}

export default NewQuote;
