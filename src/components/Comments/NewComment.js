import React from 'react';
import NewCommentLayout from '../../layout/NewCommentLayout';

const NewComment = ({data, setData}) => {
    return (
        <div className="w-full">
            <NewCommentLayout data={data} setData={setData}/>
        </div>
    );
};

export default NewComment;