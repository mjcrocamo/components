import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// semantic-ui.com, semantic ui cdn
// faker js -- generates  fake data for projects

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4 pm" 
                    comment="Nice!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Mary" 
                    timeAgo="Today at 5 pm" 
                    comment="Woot!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="SpiderMan"  
                    timeAgo="Yesterday at 3 pm" 
                    comment="Hellosh"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));