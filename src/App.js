import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PageDetails from './components/pages/PageDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatePage from './components/pages/CreatePage'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { pages, auth } = this.props;
    
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreatePage} />
            { pages && pages.map(page => {
              console.log(page.title)
              return (
            <Route path={page.title} component={PageDetails} />
            )
             })}  
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    pages: state.firestore.ordered.pages,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default connect(mapStateToProps)(App)