import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 1, author: "Raul Mercado", text:"Todo se puede con esfuerzo"},
    {id: 2, author: "Juan Perez", text:"A vivir la vida loca"},
]

const Quotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default Quotes;
