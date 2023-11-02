"use client"

import { useRouter } from "next/navigation";

const TaskCard = ( {task} ) => {

  const router = useRouter()

  return (
    <div className=" bg-teal-900 hover:bg-teal-800 cursor-pointer px-4 py-2 w-full lg:w-1/2 rounded-md"
    onClick={() => {
      router.push('/tasks/edit/' + task.id)
    }}>
      <h3 className=" font-bold text-cyan-300 text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
