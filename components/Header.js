import Link from 'next/link'

export default function Header() {
    return (
        <header className='flex items-center justify-between bg-emerald-500 p-4 font-semibold'>
            <h1 className='text-4xl text-gray-800'>Cookie Stand Admin</h1>
            <Link href='/overview'>
                <a className='bg-gray-200 px-2.5 py-0.5 rounded-md'>Overview</a>
            </Link>
        </header>
    );
}