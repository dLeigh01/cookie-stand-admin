export default function CreateForm(props) {
    return (
        <form onSubmit={props.onSubmit} className='flex justify-between text-center p-8 border-2 border-emerald-400 bg-emerald-200 w-5/6 font-bold rounded-md'>
            <div className='flex flex-col text-center w-3/5'>
                <label className='flex flex-col w-full'> ADD LOCATION
                    <input name='location' type='text' placeholder="Cookie Stand Location" className='mt-2 w-full py-2 px-4'></input>
                </label>
                <div className="flex flex-row justify-between">
                    <label className='flex flex-col w-5/12 bg-emerald-200 p-2 rounded-md mt-3'> MINIMUM CUSTOMERS PER HOUR
                        <input name='min' type='text' placeholder='0' className="mt-2 py-2 px-4"></input>
                    </label>
                    <label className='flex flex-col w-5/12 bg-emerald-200 p-2 rounded-md mt-3'> MAXIMUM CUSTOMERS PER HOUR
                        <input name='max' type='text' placeholder='0' className="mt-2 py-2 px-4"></input>
                    </label>
                </div>
            </div>
            <div className='flex flex-col w-1/3'>
                <button type='submit' className='bg-emerald-500 px-24 py-4 rounded-md font-semibold mt-4'>CREATE STAND</button>
                <label className='flex flex-col w-full bg-emerald-200 mt-5 px-10 rounded-md'> AVERAGE COOKIES PER SALE
                    <input name='avg' type='text' placeholder='0' className="mt-2 py-2 px-4"></input>
                </label>
            </div>
        </form>
    );
}