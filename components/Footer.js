export default function Footer({ stands }) {
    return (
        <footer className='bg-emerald-400 text-xl text-gray-700 p-4 font-semibold text-center'>
            {stands === 1 ? <p>{stands} Location World Wide</p> : <p>{stands} Locations World Wide</p>}
        </footer>
    );
}