import React from 'react'
import PageSummary from './PageSummary'
import { Link } from 'react-router-dom'

const PageList = ({pages}) => {
 
  return (
    <div className="page-list section">
      { pages && pages.map(page => {
        return (
          <Link to={'/page/'+page.title} key={page.title}>
            <PageSummary page={page} />
          </Link>
        )
      })}  
    </div>
  )
}

export default PageList