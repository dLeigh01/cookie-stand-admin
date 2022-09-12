import Link from 'next/link'

export default function Header({ logout }) {
    return (
        <header className='flex items-center justify-evenly bg-emerald-400 p-5 font-semibold'>
            <h1 className='text-4xl text-gray-800 font-bold'>Cookie Stand Admin</h1>
            <div>
                <button onClick={logout} className='bg-emerald-600 text-gray-200 px-2.5 py-1.5  mx-2 rounded-md'>Sign Out</button>
                <Link href='/overview'>
                    <a className='bg-gray-200 px-2.5 py-0.5 rounded-sm'>Overview</a>
                </Link>
            </div>
        </header>
    );
}