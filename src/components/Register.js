import AuthForm from "./AuthForm";
import { useState } from "react";

function Register(onRegister) {
  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: ""
  });

  function handleChange(evt) {
    const {name, value} = evt.target;
    setRegisterValues((prevState) => ({ ...prevState, [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(registerValues);
  }
  return (
    <AuthForm
      name="register"
      title="Регистрация"
      submitText="Зарегистрироваться"
      onSubmit={handleSubmit}
    >
      <input
        className="auth-form__input"
        type="email"
        name="email"
        placeholder="Email"
        id="register-email"
        required
        onChange={handleChange}
        value={registerValues.email}
      />      
      <input
        className="auth-form__input"
        type="password"
        name="password"
        placeholder="Пароль"
        id="register-password"
        minLength="6"
        maxLength="20"
        required
        onChange={handleChange}
        value={registerValues.password}
      />      
    </AuthForm>
  );
}

export default Register;
