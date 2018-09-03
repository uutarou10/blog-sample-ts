import * as React from 'react';

interface PropTypes {
  commentIds: number[]
  // comments: Comment[]
}

const commentsComponent: React.SFC<PropTypes> = () => {
  return (
    <div>
      comments
    </div>
  )
}


export default commentsComponent;