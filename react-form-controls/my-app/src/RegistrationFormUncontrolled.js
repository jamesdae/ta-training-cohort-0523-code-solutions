export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { username, password } = Object.fromEntries(formData.entries());
    console.log('uncontrolled state:', { username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username"></input>
      </label>
      <label>
        Password:
        <input type="password" name="password"></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
