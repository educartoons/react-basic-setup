import React, { Component, createContext } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const user = await createUserProfileDocument(userAuth);
        this.setState({
          user: user
        });
      }
      this.setState({
        user: userAuth
      });
    })
  }

  render() {
    const { user } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;