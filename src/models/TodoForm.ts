import { Arbor, proxiable } from "@arborjs/store";
import { ChangeEvent, FormEvent } from "react";

import { TodoList } from "./TodoList";

// Decorating custom classes with @proxiable enables
// Arbor to proxy access to fields of their instances
// which allows Arbor to track mutations to any path
// of the state tree and notify only subscribers affected
// by these mutations (this is where the magic happens).
@proxiable
export class TodoForm {
  value = "";

  constructor(readonly store: Arbor<TodoList>) {}

  onChange(e: ChangeEvent<HTMLInputElement>) {
    this.value = e.target.value;
  }

  onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.store.state.createTodo(this.value);
    this.value = "";
  }

  isEmpty() {
    return this.value === "";
  }
}
