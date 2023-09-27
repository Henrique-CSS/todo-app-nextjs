"use client";
import Link from "next/link";
import {
  ClassAttributes,
  HTMLAttributes,
  JSX,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import Cookies from "js-cookie";
import Item from "@/components/Item";

interface ITask {
  task: string;
  check: boolean;
}

export default function Home() {
  const defaultTasks: ITask[] = [
    { task: "My first task", check: false },
    { task: "My second task", check: true },
  ];
  const [tasks, setTasks] = useState<ITask[]>([{ task: "", check: false }]);
  const [iError, setIError] = useState(false);
  const [taskName, setTaskName] = useState("");
  const firstRes = Cookies.get("tasks");

  useEffect(() => {
    if (typeof firstRes === "string" && firstRes.length > 0) {
      var tasks: ITask[] = JSON.parse(atob(decodeURI(firstRes)));
      if (typeof tasks == "object" && tasks.length > 0) {
        tasks = tasks.filter((item) => item !== undefined);
        setTasks(tasks);
      } else {
        Cookies.set("tasks", btoa(JSON.stringify(defaultTasks)));
      }
    } else {
      Cookies.set("tasks", btoa(JSON.stringify(defaultTasks)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function delTask(id: number) {
    const newTasks = tasks.filter((_, i) => i !== id);
    setTasks(newTasks);
    Cookies.set("tasks", btoa(JSON.stringify(tasks)));
  }

  function addTask() {
    const newTask: ITask = {
      task: taskName,
      check: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName("");
    Cookies.set("tasks", btoa(JSON.stringify(tasks)));
  }

  function defTasks() {
    setTasks(defaultTasks);
    Cookies.set("tasks", btoa(JSON.stringify(tasks)));
  }

  return (
    <main className="flex h-screen flex-col justify-between p-8">
      <section className="container mx-auto flex min-h-0 grow flex-col">
        <div>
          <h1 className="mb-1 mt-6 text-4xl font-bold">Todo App</h1>
          <h2 className="mb-4 max-w-md text-2xl font-semibold">
            A simple todo app made in next.js that uses cookies to store the
            task list
          </h2>

          <form
            className="mb-8 flex flex-row justify-between sm:max-w-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (taskName.length > 0) {
                  addTask();
                } else {
                  setIError(true);
                }
              }
            }}
          >
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="add-input"
              type="text"
              placeholder="Task name"
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              value={taskName}
              autoComplete="off"
            />
            <button
              className="focus:shadow-outline ml-4 rounded bg-blue-500 px-4 py-2 font-bold hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={() => {
                if (taskName.length > 0) {
                  addTask();
                } else {
                  setIError(true);
                }
              }}
            >
              Add
            </button>
          </form>
        </div>
        <div className="flex-grow max-h-full overflow-auto w-fit min-w-[352px]">
          {tasks.map((item, index) => (
            <Item
              key={index}
              name={item.task}
              check={item.check}
              id={index}
              onDel={() => {
                delTask(index);
              }}
            />
          ))}
        </div>
        <p
          className="font-light text-[#5f6c7b] underline hover:text-[#2b6cb0] focus:outline-none"
          onClick={() => {
            defTasks();
          }}
        >
          Change tasks back to default
        </p>
      </section>
      <footer className="flex grow-0 py-6">
        <h2 className="text-2xl font-semibold">
          By{" "}
          <Link
            href="https://www.linkedin.com/in/henriquesoliveira09/"
            className="underline"
          >
            Henrique Souza
          </Link>
        </h2>
      </footer>
    </main>
  );
}
