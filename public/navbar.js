function NavBar(){
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand" href="#">NinaBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" id="createAccount" style={{display: 'inline'}} href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="login" style={{display: 'inline'}} href="#/login/">Login</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" id="logout" style={{display: 'none'}} href="#/logout/">Logout</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" id="deposit" style={{display: 'none'}} href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="withdraw" style={{display: 'none'}} href="#/withdraw/">Withdraw</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" id="balance" style={{display: 'none'}} href="#/balance/">Balance</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" id="allData" style={{display: 'none'}} href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>

  );
}