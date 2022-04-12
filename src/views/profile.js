import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  //   const { user } = null
  // const { name, picture, email } = user;
  const user = {
    name: 'Chili Piper',
    email: 'testchilipiper@gmail.com'
  }

  return (
    <div id= 'profile'>
      <div className="row align-items-center profile-header">
        <div className="col-md text-center text-md-left" id = 'name'>
          <h2>Name</h2>
          <p className="lead text-muted">{user.name}</p>
        </div>
        <div className="col-md text-center text-md-left" id = 'email'>
          <h2>Email</h2>
          <p className="lead text-muted">{user.email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
