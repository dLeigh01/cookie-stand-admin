import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import SignIn from '../components/SignIn';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function Home() {
    const { user, login, logout } = useAuth();
    const { resources, loading, createResource, deleteResource } = useResource();

    function createStandHandler(event) {
        event.preventDefault();
        const hourlyTotals = getHourlyTotals(parseInt(event.target.min.value), parseInt(event.target.max.value), parseInt(event.target.avg.value))
        const totalValue = getTotal(hourlyTotals)
        const standObj = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.min.value),
            maximum_customers_per_hour: parseInt(event.target.max.value),
            average_cookies_per_sale: parseInt(event.target.avg.value),
            hourly_sales: hourlyTotals,
            total: totalValue,
        };

        createResource(standObj);
        event.target.reset();
    }

    function handleClick(event) {
        event.preventDefault();
        login(event.target.username.value, event.target.password.value)
    }

    function getHourlyTotals(min, max, avg) {
        const hourlyTotals = []
        const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
        for (let i = 0; i < hours.length; i++) {
            hourlyTotals.push(Math.floor((Math.random() * (max - min) + min) * avg))
        }
        return hourlyTotals
    }

    function getTotal(hourlyTotals) {
        let total = 0
        for (let i = 0; i < hourlyTotals.length; i++) {
            total += hourlyTotals[i]
        }
        return total
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header logout={logout} user={user}/>
            {user ? (
                <main className='bg-emerald-50 p-8 flex flex-col items-center space-y-8'>
                    <CreateForm onSubmit={createStandHandler}/>
                    <ReportTable stands={resources} loading={loading} onDelete={deleteResource}/>
                </main>
            ) : (
                <main>
                    <SignIn handleClick={handleClick} />
                </main>
            )
            }
            <Footer stands={resources ? resources.length : 0}/>
        </div>
    );
}
