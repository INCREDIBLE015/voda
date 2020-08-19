import React from 'react'
import moment from 'moment'

const PageSummary = ({page}) => {
  return (
    <div className="card z-depth-0 page-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{page.title}</span>
        <p>Posted by {page.authorFirstName} {page.authorLastName}</p>
        <p className="grey-text">{moment(page.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default PageSummary