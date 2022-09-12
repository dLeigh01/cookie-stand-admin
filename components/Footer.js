export default function Footer(props) {
    return (
        <footer className='bg-emerald-400 text-xl text-gray-700 p-4 font-semibold text-center'>
            <p>{props.stands} Locations World Wide</p>
        </footer>
    );
}