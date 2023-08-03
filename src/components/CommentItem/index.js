// Write your code here
import './index.css'

const CommentItem = () => (
  <div>
    <div>
      <p className="logo">R</p>
      <p>Name</p>
      <p>Time</p>
    </div>
    <p>Description is more Powerful</p>
    <div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          alt="like"
        />
        <p>Like</p>
      </button>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          alt="delete"
        />
      </button>
    </div>
  </div>
)

export default CommentItem
