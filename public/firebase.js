const firebaseConfig = {
    apiKey: "AIzaSyD2FpVi-8qhXySc6iAYIOsq8KLAfrff6vE",
    authDomain: "nina-cravenfullstackbankingapp.firebaseapp.com",
    projectId: "nina-cravenfullstackbankingapp",
    storageBucket: "nina-cravenfullstackbankingapp.appspot.com",
    messagingSenderId: "680939972661",
    appId: "1:680939972661:web:2da4fcbbe1e051c4a9e97c"
  };
  
  // Initialize Firebase
  initialize(firebaseConfig);

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const logout = document.getElementById('logout');
  const userNameDisplay = document.getElementById('name-display');
  let currentUserEmail = ''; 

  function updateCurrentUser(userEmail) {
    userNameDisplay.innerHTML = 'Current user: ' + userEmail;
    currentUserEmail = userEmail;
  }

  // login
  login.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Login Response: ', resp);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Signup + Login Response: ', resp);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // logout
  logout.addEventListener('click', (e) => {
    firebase
      .auth()
      .signOut()
      .then((resp) => {
        console.log('Logout Response: ', resp);
        logout.style.display = 'none';
        login.style.display = 'inline';
        signup.style.display = 'inline';
        userNameDisplay.style.display = 'none';
        write.style.display = 'none';
        updateCurrentUser('');
      })
      .catch((e) => console.warn(e.message));
  });