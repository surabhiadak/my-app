export interface Task {
  id: number;
  tasks: string;
  completed: boolean;
}

export interface PreviousLoadedTask {
  id: number;
  title: string;
}
