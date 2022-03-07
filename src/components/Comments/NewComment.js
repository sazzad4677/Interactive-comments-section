import React from 'react';
import NewCommentLayout from '../../layout/NewCommentLayout';

const NewComment = ({data, setData, reply,setReply}) => {
    return (
        <div className="w-full">
            <NewCommentLayout data={data} setData={setData} reply={reply} setReply={setReply}/>
        </div>
    );
};

export default NewComment;