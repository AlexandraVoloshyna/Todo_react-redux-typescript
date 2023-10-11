export interface ToDo {
    id: number;
    completed: boolean;
    title: string;
    body: string

  }
  
  export interface FilterState {
    filter: "all"| "active" | "completed";
    
  }
  
  export interface ToDosState {
    todos: ToDo[];
  }
  
  