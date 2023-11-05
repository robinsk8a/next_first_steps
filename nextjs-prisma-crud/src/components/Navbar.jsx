import Link from "next/link"


function Navbar() {
  return (
    <nav className=" bg-cyan-900">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h3 className="font-bold text-3xl py-3">
                    Next CRUD
                </h3>
            
            </Link>
            <ul className="flex gap-x-4 text-lg font-bold">
                <li className=" text-green-100 hover:text-green-300">
                    <Link href="/">
                        Tasks
                    </Link>
                </li>
                <li className=" text-green-100 hover:text-green-300">
                    <Link href="/new">
                        New
                    </Link>
                </li>
                <li className=" text-green-100 hover:text-green-300">
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar