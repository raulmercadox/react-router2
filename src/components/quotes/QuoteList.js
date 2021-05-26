import {Fragment} from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {useHistory, useLocation} from 'react-router-dom';

const QuoteList = (props) => {
    const history = useHistory();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort');
    const ascending = sort === 'asc';

    const sortQuotes = (quotes, ascending) => {
        return quotes.sort((quoteA, quoteB) => {
            if (ascending) {
                return quoteA.text > quoteB.text ? 1 : -1;
            } else {
                return quoteA.text < quoteB.text ? 1 : -1;
            }
        });
    };

    console.log(location);

    const sortHandling = () => {
        // history.push('/quotes?sort=' + (ascending ? 'des' : 'asc'));
        history.push({
            pathname: location.pathname,
            search: '?sort=' + (ascending ? 'des' : 'asc')
        })
    }

    const sortedQuotes = sortQuotes(props.quotes, ascending);

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={sortHandling}>Sort Quotes {ascending ? 'descending' : 'ascending'}</button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;
