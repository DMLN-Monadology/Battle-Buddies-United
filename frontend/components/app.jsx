import React from 'react';
import UsersContainer from './users/users_container';

const App = ({children}) => (
  <div>
    <UsersContainer/>
    
    {children}
  </div>
);

export default App;
