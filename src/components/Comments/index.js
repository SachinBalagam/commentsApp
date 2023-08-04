import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuid} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', description: ''}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({description: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {name, description} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuid(),
      date: formatDistanceToNow(new Date()),
      name,
      description,
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      description: '',
    }))
  }

  onLikeButtonToggle = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onClickDeleteButton = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filteredCommentsList})
  }

  render() {
    const {name, description, commentsList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="app-heading">Comments</h1>
          <div className="image-input-container">
            <form className="form-container" onSubmit={this.onFormSubmit}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                placeholder="Your Name"
                className="input-name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                placeholder="Your Comment"
                className="input-comment"
                onChange={this.onCommentChange}
                value={description}
              />
              <button type="submit" className="submit-button">
                Add Comment
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
          <hr className="horizontal-line" />
          <p className="comments-count">
            <span className="count">{commentsList.length}</span> Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                onLikeButtonToggle={this.onLikeButtonToggle}
                onClickDeleteButton={this.onClickDeleteButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
