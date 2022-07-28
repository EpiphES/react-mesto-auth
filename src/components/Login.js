import AuthForm from "./AuthForm";
import { useState } from "react";

function Login(onLogin) {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: ""
  });

  function handleChange(evt) {
    const {name, value} = evt.target;
    setLoginValues((prevState) => ({ ...prevState, [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(loginValues);
  }
  return (
    <AuthForm
      name="login"
      title="Вход"
      submitText="Войти"
      onSubmit={handleSubmit}
    >
      <input
        className="auth-form__input"
        type="email"
        name="email"
        placeholder="Email"
        id="login-email"
        required
        onChange={handleChange}
        value={loginValues.email}
      />      
      <input
        className="auth-form__input"
        type="password"
        name="password"
        placeholder="Пароль"
        id="login-password"
        minLength="6"
        maxLength="20"
        required
        onChange={handleChange}
        value={loginValues.password}
      />      
    </AuthForm>
  );
}

export default Login;
