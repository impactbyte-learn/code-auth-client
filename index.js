;(function() {
  const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
      Authorization: `Bearer token`
    }
  })

  // ---------------------------------------------------------------------------

  const registerForm = $('#register-form')
  const registerEmail = $('#register-email')
  const registerPassword = $('#register-password')

  const loginForm = $('#login-form')
  const loginEmail = $('#login-email')
  const loginPassword = $('#login-password')

  // ---------------------------------------------------------------------------

  const register = () => {
    const data = {
      email: registerEmail.val(),
      password: registerPassword.val()
    }

    request
      .post('/users/register', data)
      .then(response => {
        swal('Register success!', response.data.message, 'success')
      })
      .catch(error => {
        console.log(error)
        swal('Register failed!', 'User is already exist', 'error')
      })
  }

  const login = () => {
    const email = loginEmail.val()
    const password = loginPassword.val()

    console.log('login:', email, password)
  }

  // ---------------------------------------------------------------------------

  registerForm.on('submit', event => {
    event.preventDefault()

    register()
  })

  loginForm.on('submit', event => {
    event.preventDefault()

    login()
  })
})()
