export default function SignIn({ handleClick }) {
    return (
        <form onSubmit={handleClick} className='flex flex-col text-center p-4 border-2 border-emerald-400 bg-emerald-200 w-5/6 font-semibold space-y-5 rounded-md m-auto my-5'>
            <label className='flex flex-col font-bold text-4xl mb-5'>USER NAME
                <input name='username' type='text' className="text-2xl font-semibold px-2 py-1 mt-5"></input>
            </label>
            <label className='flex flex-col font-bold text-4xl'>PASSWORD
                <input name='password' type='text' className="text-2xl font-semibold px-2 py-1 my-5"></input>
            </label>
            <button type='submit' className='bg-emerald-500 px-24 py-4 rounded-md text-4xl'>SIGN IN</button>
        </form>
    )
}