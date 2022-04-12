const Login = () => {

  return (
    <form action="/profile">
      <h4>Sign In to Gmail</h4>
      <div className="form-group">
        <div class="col-md-4 mb-3">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
          />

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <button id="btnLogin" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
