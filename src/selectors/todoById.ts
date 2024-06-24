import { store } from "../stores/todos";

export function todoById(id: string) {
  return store.state.find((todo) => todo.id === id)!;
}
