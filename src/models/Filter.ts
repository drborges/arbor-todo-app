import { serializable } from "@arborjs/json";
import { proxiable } from "@arborjs/store";
import { ChangeEvent } from "react";

import { Status } from "./Todo";
import { TodoList } from "./TodoList";

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
export class Filter {
  constructor(public value: "all" | Status = "all") {}

  apply(todos: TodoList) {
    if (this.value === "all") {
      return todos;
    }

    return todos[this.value];
  }

  is(value: string) {
    return this.value === value;
  }

  onChange(e: ChangeEvent<HTMLInputElement>) {
    this.value = e.target.value as Status;
  }
}
