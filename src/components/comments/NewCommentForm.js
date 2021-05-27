import {useRef, useEffect} from 'react';
import useHttp from "../../hooks/use-http";
import {addComment} from '../../lib/api';
import classes from './NewCommentForm.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();
    const {sendRequest, status} = useHttp(addComment, false);

    const submitFormHandler = (event) => {
        event.preventDefault();

        // optional: Could validate here

        // send comment to server
        const comment = commentTextRef.current.value;
        sendRequest({quoteId: props.quoteId, commentData: { text: comment}});
    };

    const submitComment = props.onSubmitComment;

    useEffect(() => {
        if (status === 'completed')
        {
            submitComment();
            commentTextRef.current.value="";
        }
    }, [status, submitComment]);


    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status==='pending' && <LoadingSpinner/>}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
