import { Arbor } from "@arborjs/store";
import { LocalStorage } from "@arborjs/plugins";
import { stringify, parse } from "@arborjs/json";

import { Todo } from "../models/Todo";
import { TodoList } from "../models/TodoList";

// A store is where you hold application state outside of React's lifecycle.
// An app can have multiple stores, it's a good practice in Arbor to create
// specific stores for specific concepts, a todos store vs filter store for example.
//
// This allows more granular control over which components are affected by which
// stores. With that said, it's Ok to have a single store for the entire application
// state too, Arbor will do its best to track access to specific parts of the state
// tree so it knows exactly which React components need to re-render when mutations
// happen.
//
// With that said, if you are dealing with a large application state and need to persist
// the state on the user's device or remote, consider the multiple stores approach since
// this can reduce the amount of data written to the persistence backend on every update.
export const store = new Arbor(
  new TodoList(new Todo("Do the dishes"), new Todo("Walk the dogs"))
);

// Arbor supoprts a simple plugin system that allows users to extend Arbor with
// extra funcitonality, such as persisting the store to local storage, indexed db,
// or any other backend.
store.use(
  new LocalStorage({
    key: "mytodoapp.todos",
    deserialize: parse,
    serialize: stringify,
  })
);
