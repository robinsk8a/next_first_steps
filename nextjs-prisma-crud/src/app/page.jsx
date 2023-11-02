import { prisma } from "@/libs/prisma";
import  TaskCard from "@/components/TaskCard";

async function loadTasks() {
  // // Con este enfoque se hace una petición directa a la base de datos
  // // Es más útil si contamos con un backend separado
  // const res = await fetch('http://localhost:3002/api/tasks')
  // const data = await res.json()
  // return data
  // console.log(data)

  // Este enfoque es mejor cuando tenemos el backend en el mismo framework como ahora
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();
  // console.log(tasks);

  return (
    <section className=" container mx-auto">
      <div className=" flex flex-col gap-3 items-center m-4">
        {tasks.map((task) => (
        
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
