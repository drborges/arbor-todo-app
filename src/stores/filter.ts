import { Arbor } from "@arborjs/store";
import { LocalStorage } from "@arborjs/plugins";
import { stringify, parse } from "@arborjs/json";

import { Filter } from "../models/Filter";

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
export const store = new Arbor(new Filter());

// Use plugins to extend Arbor's behavior.
// Use the LocalStorage plugin to persist the store's state to local storage
// upon any store update.
store.use(
  new LocalStorage({
    key: "mytodoapp.filter",
    deserialize: parse,
    serialize: stringify,
  })
);
