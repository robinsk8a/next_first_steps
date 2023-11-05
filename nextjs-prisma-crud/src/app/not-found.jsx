import Link from "next/link"


function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">
                Not found
            </h1>
            <Link className="text-green-300 hover:text-cyan-200 font-bold" href="/">
                Return Home
            </Link>
        </div>
    </section>
  )
}

export default NotFound