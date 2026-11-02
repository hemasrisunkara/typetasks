export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export function addTask(tasks: Task[], title: string): Task[] {
  const nextId =
    tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;

  return [...tasks, { id: nextId, title, status: "todo" }];
}

export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

export function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}

export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;

    switch (task.status) {
      case "todo":
        return { ...task, status: "in-progress" };
      case "in-progress":
        return { ...task, status: "done" };
      case "done":
        return task;
    }
  });
}