import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { 
    Grid, 
    Button, 
    Card, 
    CardContent, 
    CardHeader, 
    Avatar, 
    FormControl,
    FormControlLabel,
    InputLabel,
    Input,
    Checkbox,
    InputAdornment,
    IconButton,
    Grow,
    LinearProgress } from '@material-ui/core';
import {PersonAdd, Visibility, VisibilityOff} from '@material-ui/icons';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
        <Grid container 
        spacing={2} 
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '80vh' }}>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={4} >
            <Grow in={true} timeout={1000}> 
                <Card>
                    <CardHeader 
                        title="User Signup"
                        avatar={
                            <Avatar>
                                <PersonAdd style={{fontSize:30}} />
                            </Avatar>
                        }
                    />
                    <CardContent>
                        <form onSubmit={this.handleSubmit} autoComplete="off">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" onChange={this.handleChange} type="text" autoFocus />
                            </FormControl>

                            <FormControl fullWidth required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                type="password"
                                id="password"
                                onChange={this.handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                    </InputAdornment>
                                }
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input id='firstName' onChange={this.handleChange} type="text" autoFocus />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input id='lastName' onChange={this.handleChange} type="text" autoFocus />
                            </FormControl>

                        
                        <Button 
                            fullWidth 
                            variant="contained" 
                            type="submit"
                            color="primary"
                            style={{marginTop:20}}>SignUp</Button>
                        <div className="center red-text">
                             { authError ? <p>{authError}</p> : null }
                        </div>
                        

                           
                        </form>
                    </CardContent>
                </Card>
                    </Grow>
            </Grid>
        </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)