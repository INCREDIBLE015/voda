import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const PageDetails = (props) => {
  const { page, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (page) {
    return (
      <div className="container section page-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{page.title}</span>
            <p>{page.content}</p>
            
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {page.authorFirstName} {page.authorLastName}</div>
            <div>{moment(page.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading page...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const pages = state.firestore.data.pages;
  const page = pages ? pages[id] : null
  return {
    page: page,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'pages'
  }])
)(PageDetails)