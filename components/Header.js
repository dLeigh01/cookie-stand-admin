import Link from 'next/link'

export default function Header({ logout, user }) {
    return (
        <header className='flex items-center justify-evenly bg-emerald-400 p-5 font-semibold'>
            <h1 className='text-4xl text-gray-800 font-bold'>Cookie Stand Admin</h1>
            <div className='flex flex-row'>
                {user ?
                    // <button
                    <div className='flex flex-row'>
                        <div className='bg-emerald-100 text-gray-800 px-2.5 py-1.5  mx-2 rounded-md'>{user.username}</div>
                        <button onClick={logout} className='bg-emerald-600 text-emerald-100 px-2.5 py-1.5  mx-2 rounded-md'>Sign Out</button>
                    </div>
                    :
                    <></>
                }
                <Link href='/overview'>
                    <a className='bg-gray-200 ml-2 px-2.5 py-1 rounded-sm'>Overview</a>
                </Link>
            </div>
        </header>
    );
}