"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PUT } from "../api/tasks/[id]/route";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    // const title = event.target.title.value;
    // const description = event.target.description.value;

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
    }

    
    router.refresh();
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
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-sm">
          Task description
        </label>
        <textarea
          id="description"
          rows="3"
          placeholder="Description"
          className=" border broder-teal-400 p-2 mb-4 w-full text-teal-900 font-bold"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>

        <div className="flex justify-between">
          <button 
            type="submit"
            className=" bg-green-500 hover:bg-green-600 text-green-50 font-bold py-2 px-4 rounded"
          >
            Crear
          </button>

          {params.id && (
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE"
                })
                const data = res.json()
                router.refresh()
                router.push("/")
              }}
            >
              Delete
            </button>
          )}

        </div>
      </form>
    </div>
  );
}

export default NewPage;
