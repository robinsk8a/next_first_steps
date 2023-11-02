"use client";
import { useRouter } from "next/navigation";

function NewPage() {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <form className=" bg-cyan-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="title" className=" font-bold text-sm">
          Task title
        </label>

        <input
          id="title"
          type="text"
          placeholder="Title"
          className=" border broder-teal-400 p-2 mb-4 w-full text-teal-900 font-bold"
        />

        <label htmlFor="description" className="font-bold text-sm">
          Task description
        </label>
        <textarea
          id="description"
          rows="3"
          placeholder="Description"
          className=" border broder-teal-400 p-2 mb-4 w-full text-teal-900 font-bold"
        ></textarea>

        <button className=" bg-green-500 hover:bg-green-600 text-green-50 font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
