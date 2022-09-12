export default function CreateForm(props) {
    return (
        <form onSubmit={props.onSubmit} className='text-center p-4 border-2 border-emerald-400 bg-emerald-200 w-5/6 font-semibold space-y-5 rounded-md'>
            <div className='text-center'>
                <label className='flex w-full'> Location
                    <input name='location' type='text' className='ml-2 w-full'></input>
                </label>
            </div>
            <div className='flex flex-auto space-x-2'>
                <label className='flex flex-col w-full bg-emerald-200 p-2 rounded-md'> Minimum Customers per Hour
                    <input name='min' type='text'></input>
                </label>
                <label className='flex flex-col w-full bg-emerald-200 p-2 rounded-md'> Maximum Customers per Hour
                    <input name='max' type='text'></input>
                </label>
                <label className='flex flex-col w-full bg-emerald-200 p-2 rounded-md'> Average Cookies per Sale
                    <input name='avg' type='text'></input>
                </label>
                <button type='submit' className='bg-emerald-500 px-24 py-4 rounded-md'>Create</button>
            </div>
        </form>
    );
}