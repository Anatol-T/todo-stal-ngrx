import { DomainTask } from "../../models/tasks.models";
import { Todo } from "../../models/todos.models";

export interface AppStateInterface {
  todos: Todo[],
  tasks: DomainTask
}