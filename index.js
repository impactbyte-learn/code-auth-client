;(function() {
  // ---------------------------------------------------------------------------

  const registerForm = $('#register-form')
  const registerEmail = $('#register-email')
  const registerPassword = $('#register-password')

  const loginForm = $('#login-form')
  const loginEmail = $('#login-email')
  const loginPassword = $('#login-password')

  // ---------------------------------------------------------------------------

  const register = () => {
    const email = registerEmail.val()
    const password = registerPassword.val()

    console.log('register', email, password)
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
