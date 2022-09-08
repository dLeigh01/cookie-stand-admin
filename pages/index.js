import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import { useState } from 'react';

export default function Home() {
    const [str, setStr] = useState('{}');

    function createCookieStandHandler(event) {
        event.preventDefault();
        stringifyContent(event.target.location.value, parseInt(event.target.min.value), parseInt(event.target.max.value), parseInt(event.target.avg.value));
        event.target.reset();
    }

    function stringifyContent(location, min, max, avg){
        setStr(JSON.stringify({location, min, max, avg}))
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <Main onSubmit={createCookieStandHandler} stringified = {str} />
            <Footer />
        </div>
    );
}

function Main(props) {
    return (
        <main className='bg-emerald-100 p-8 flex flex-col items-center space-y-8'>
            <CreateForm onSubmit={props.onSubmit}/>
            <ReportTable />
        </main>
    );
}
