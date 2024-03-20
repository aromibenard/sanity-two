export default function NavBar() {
    return (
        <div className="flex h-[4rem] p-4 justify-around">
            <div className="cursor-pointer font-bold">
                <p>Home</p>
            </div>
            <div className="cursor-pointer flex font-bold space-x-4">
                <p>Services</p> 
                <p>About</p>
            </div>
        </div>
    )
}