// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

// Write your code here

import {Component} from 'react'
import CommentItem from '../CommentItem'
import './index.css'

class Comments extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Comments</h1>
          <div className="image-input-container">
            <div className="input-container">
              <p>Say something about 4.0 Technologies</p>
              <form className="form-container">
                <input placeholder="Your Name" className="input-name" />
                <textarea
                  placeholder="Your Comment"
                  className="input-comment"
                />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comment-image"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <p className="comments-count">
            <span className="count">0</span> Comments
          </p>
        </div>
        <div>
          <CommentItem />
        </div>
      </div>
    )
  }
}

export default Comments
