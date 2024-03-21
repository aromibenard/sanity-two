//the navbar component

import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex h-[5rem] p-4 justify-around">
            <div className="cursor-pointer font-bold">

                {/* uses next js routing and navigates to the home page */}
                <Link href={'/'}>
                    <p className="transition hover:bg-slate-300 hover:shadow-md hover:rounded-md p-2">Home</p>
                </Link>
                
            </div>
            <div className="cursor-pointer flex font-bold space-x-4 justify-center">
                <p className="transition hover:bg-slate-300 hover:shadow-md hover:rounded-md p-1">Services</p> 
                <p className="transition hover:bg-slate-300 hover:shadow-md hover:rounded-md p-1">About</p>
            </div>
        </div>
    )
}