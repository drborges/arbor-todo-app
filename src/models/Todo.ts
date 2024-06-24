import { nanoid } from "nanoid";
import { ChangeEvent } from "react";
import { serializable } from "@arborjs/json";
import { detach, proxiable } from "@arborjs/store";

export type Status = "done" | "wip";

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
export class Todo {
  id = nanoid();
  #status: Status = "wip";

  constructor(public content: string) {}

  onChange(e: ChangeEvent<HTMLInputElement>) {
    this.content = e.target.value;
  }

  toggle() {
    this.#status = this.done ? "wip" : "done";
  }

  delete() {
    detach(this);
  }

  get done() {
    return this.#status === "done";
  }

  get status() {
    return this.#status;
  }

  set status(value: string) {
    this.#status = value;
  }
}
