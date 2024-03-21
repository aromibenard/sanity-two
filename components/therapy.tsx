export default function Therapy() {
    return (
        <div className=" my-10 md:h-[20rem]">
            <div className="flex">
                <h1 className="mx-auto font-bold text-4xl bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">You deserve to be happy.</h1>
            </div>
            <div className="flex">
                <h3 className="mx-auto font-semibold py-4">What kind of therapy are you looking for?</h3>
            </div>

            
            <div className="grid md:grid-cols-3 my-4 py-3 items-center h-[13rem]">
                <div className="mx-auto border-2 border-gray-400 rounded-md shadow-lg h-5/6 w-2/3 grid items-center hover:cursor-pointer hover:shadow-blue-200 hover:scale-105 hover bg-slate-100 hover:border-blue-300 transition hover:text-xl">
                    <div className="mx-auto font-semibold">Individual</div>
                </div>
                <div className="mx-auto border-2 border-gray-400 rounded-md shadow-lg h-5/6 w-2/3 grid items-center hover:cursor-pointer hover:shadow-blue-200 hover:scale-105 hover bg-slate-100 hover:border-blue-300 transition hover:text-xl">
                    <div className="mx-auto font-semibold">Couples</div>
                </div>
                <div className="mx-auto border-2 border-gray-400 rounded-md shadow-lg h-5/6 w-2/3 grid items-center hover:cursor-pointer hover:shadow-blue-200 hover:scale-105 hover bg-slate-100 hover:border-blue-300 transition hover:text-xl">
                    <div className="mx-auto font-semibold">Teen</div>
                </div>
            </div>

        </div>
    )
}