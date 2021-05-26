import classes from './QuoteItem.module.css';
import {Link, useRouteMatch} from "react-router-dom";

const QuoteItem = (props) => {
    const match = useRouteMatch();
    console.log(match);
      return (
        <li className={classes.item}>
          <figure>
            <blockquote>
              <p>{props.text}</p>
            </blockquote>
            <figcaption>{props.author}</figcaption>
          </figure>
          <Link className='btn' to={`${match.path}/${props.id}`}>
            View Fullscreen
          </Link>
        </li>
      );
};

export default QuoteItem;
