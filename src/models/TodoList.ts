import { serializable } from "@arborjs/json";
import { proxiable } from "@arborjs/store";

import { Todo } from "./Todo";

// Decorating custom classes with @proxiable enables
// Arbor to proxy access to fields of their instances
// which allows Arbor to track mutations to any path
// of the state tree and notify only subscribers affected
// by these mutations (this is where the magic happens).
@proxiable
// Decorating classes with @serializable allows @arborjs/json
// to serialize instances of these classes preserving type
// information, which in turn enables type-specific deserialization.
@serializable
export class TodoList extends Array<Todo> {
  createTodo(content: string) {
    this.push(new Todo(content));
  }

  isEmpty() {
    return this.length === 0;
  }

  get done() {
    return new TodoList(...this.filter((todo) => todo.done));
  }

  get wip() {
    return new TodoList(...this.filter((todo) => !todo.done));
  }
}
