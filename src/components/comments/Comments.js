import {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import useHttp from "../../hooks/use-http";
import {getAllComments} from '../../lib/api';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const {sendRequest, status, data} = useHttp(getAllComments, true);

    const params = useParams();
    const quoteId = params.quoteId;
    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const submitCommentHandler = useCallback(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    let commentsInfo = '';

    useEffect(() => {
        sendRequest(quoteId)
    }, [quoteId, sendRequest]);

    if (status === 'pending')
    {
        commentsInfo = <div className="centered"><LoadingSpinner/></div>;
    }
    if (status === 'completed' && data.length === 0)
    {
        commentsInfo = <div className='centered'>No comments found.</div>;
    }
    if (status === 'completed' && data.length > 0)
    {
        commentsInfo = <div className='centered'><CommentsList comments={data} /></div>
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm onSubmitComment={submitCommentHandler} quoteId={params.quoteId}/>}
            {commentsInfo}
        </section>
    );
};

export default Comments;
