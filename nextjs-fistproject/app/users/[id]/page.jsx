
async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

async function UserPage({params}) {
    console.log(params)
    const user = await getUser(params.id)
    return (
        <div className=" bg-cyan-200 p-6 text-teal-800 rounded-lg">
            <img src={user.avatar} className=" m-auto my-4" />
            <h3 className=" text-3xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
            <p>Email: {user.email}</p>
            <br />
        </div>
    ) 
}

export default UserPage;