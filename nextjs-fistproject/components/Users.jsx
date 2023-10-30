// Link componets are server components so we dont need to use client functionality this time
// "use client";
import Link from "next/link";




function Users({users}) {
    return (
        <ul>
            {users.map(user => (
                <Link href={`/users/${user.id}`} key={user.id} >
                    <li className="bg-slate-400 mb-2 p-4 rounded-md text-teal-900 flex justify-between items-center">
                    <div>
                        <h5 className="font-bold">
                        {user.id}. {user.first_name} {user.last_name}
                        </h5>
                        <p className="text-teal-700">
                        email: {user.email}
                        </p>
                    </div>
                    <img src={user.avatar} className="rounded-full w-20" />
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Users