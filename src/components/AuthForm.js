function AuthForm({name, title, submitText, children, onSubmit}) {
  return (
  <>
    <h2 className="auth-form__title">{title}</h2>
    <form
      className="auth-form__form"
      name={`${name}-form`}
      onSubmit={onSubmit}>
      {children}
      <button
        className="auth-form__submit-button"
        type="submit"
        aria-label={submitText}>
        {submitText}
      </button>
    </form>
  </>
  )
}
export default AuthForm;