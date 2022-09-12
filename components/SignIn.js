export default function SignIn({ handleClick }) {
    return (
        <form onSubmit={handleClick}>
            <label>Username:
                <input name='username' type='text'></input>
            </label>
            <label>Password:
                <input name='password' type='text'></input>
            </label>
            <button type='submit'>Log In</button>
        </form>
    )
}