import React from 'react';
import Card from '@material-ui/core/Card';
import "./Sidebar.css"

function Sidebar(props) {
    const { pages } = props;
    return (
        <div>
        { pages && pages.map(page => {
            return (
                <Card className="sidebar__content__card" >
                  <div className="sidebar__content__message">
                      <h4>{page.title}</h4>
                  </div>
              </Card>
            )
        })}
        </div>
    )
}

export default Sidebar
