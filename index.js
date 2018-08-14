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
    const data = {
      email: registerEmail.val(),
      password: registerPassword.val()
    }

    request
      .post('/users/login', data)
      .then(response => {
        swal('Login success!', response.data.message, 'success')
      })
      .catch(error => {
        console.log(error)
        swal(
          'Login failed!',
          'User is not exist or password is mismatch',
          'error'
        )
      })
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
