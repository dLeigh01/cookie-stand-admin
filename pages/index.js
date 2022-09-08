import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import { useState } from 'react';

export default function Home() {
    const [stands, setStands] = useState('');

    function createStandHandler(event) {
        event.preventDefault();
        const standObj = {
            id: stands.length + 1,
            location: event.target.location.value,
            minCustomers: parseInt(event.target.min.value),
            maxCustomers: parseInt(event.target.max.value),
            avgCookies: parseInt(event.target.avg.value),
            hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        };

        setStands([...stands, standObj]);
        event.target.reset();
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main className='bg-emerald-100 p-8 flex flex-col items-center space-y-8'>
                <CreateForm onSubmit={createStandHandler}/>
                <ReportTable stands={stands} />
            </main>
            <Footer stands={stands.length}/>
        </div>
    );
}
