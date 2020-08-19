import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
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
import {Person, Visibility, VisibilityOff} from '@material-ui/icons';
import { auth } from 'firebase';



class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

 
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)

  }

  
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
        <Grid container 
        spacing={0} 
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '80vh' }}>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={4} >
            <Grow in={true} timeout={1000}> 
                <Card>
                    <CardHeader 
                        title="User Login"
                        avatar={
                            <Avatar>
                                <Person style={{fontSize:30}} />
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
                                    <IconButton aria-label="Toggle password visibility" >
                                        
                                    </IconButton>
                                    </InputAdornment>
                                }
                                />
                            </FormControl>

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                        <Button 
                            fullWidth 
                            variant="contained" 
                            type="submit"
                            color="primary"
                            style={{marginTop:20}}
                            >Login</Button>
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
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)