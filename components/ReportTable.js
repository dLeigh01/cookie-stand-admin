export default function ReportTable({ stands, loading, onDelete }) {
    if (stands == false) {
        return <h2 className="text-2xl">No Cookie Stands Available</h2>
    } else if (loading) {
        return <p>Loading ...</p>
    } else {
        const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

        const totals = getTableTotals()
        const fullTotal = getFullTotal()
        function getTableTotals() {
            const totals = [];
    
            for (let i = 0; i < hours.length; i++) {
                let total = 0
                for (let j = 0; j < stands.length; j++) {
                    total += stands[j].hourly_sales[i]
                }
                totals.push(total)
            }
    
            return totals
        }

        function getFullTotal() {
            let total = 0

            for (let i = 0; i < stands.length; i++) {
                total += stands[i].total
            }
            return total
        }

        return (
            <table className='w-5/6 bg-emerald-400 border-2 border-emerald-500'>
                <thead>
                    <tr>
                        <th className="border-2 border-emerald-500 text-left px-1">Location</th>
                        {hours.map(hour => <th className="border-2 border-emerald-500 text-left px-1">{hour}</th>)}
                        <th className="border-2 border-emerald-500 text-left px-1">Totals</th>
                    </tr>
                </thead>
                <tbody className='border-2 border-emerald-500'>
                    {stands.map(stand => (
                        <tr key={stand.id} className='odd:bg-emerald-200 even:bg-emerald-300'>
                            <td className='flex justify-between pl-4 border-b-2 pr-2 py-2 border-emerald-500 font-bold'>{stand.location} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => onDelete(stand.id)} className="w-6 h-6 hover:cursor-pointer text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            </td>
                            {stand.hourly_sales.map(sales => <td className='text-right px-2 border-2 border-emerald-500'>{sales}</td>)}
                            <td className='text-right px-2 border-2 border-emerald-500'>{stand.total}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='border-2 border-emerald-500'>
                    <tr className='border-2 border-emerald-500'>
                        <td className="px-1 py-2 font-bold">Totals</td>
                        {totals.map(sales => <td className='text-right px-2 border-2 border-emerald-500'>{sales}</td>)}
                        <td className="text-right px-2">{fullTotal}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}