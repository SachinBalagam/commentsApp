// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, onLikeButtonToggle, onClickDeleteButton} = props
  const {
    name,
    description,
    date,
    id,
    isLiked,
    initialClassName,
  } = commentDetails
  const initial = name.slice(0, 1).toUpperCase()

  const onToggleLikeButton = () => {
    onLikeButtonToggle(id)
  }

  const onDeleteButtonClick = () => {
    onClickDeleteButton(id)
  }

  const LikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'button active' : 'button'

  return (
    <li className="list-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="user-name">{name}</p>
            <p className="time">{date}</p>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={LikeImage} alt="like" className="like-icon" />
          <button
            type="button"
            className={likeText}
            onClick={onToggleLikeButton}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDeleteButtonClick}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
