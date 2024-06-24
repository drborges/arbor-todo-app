import { Arbor, proxiable, TrackedArbor } from "@arborjs/store";
import { Flex } from "playbook-ui";
import { FiltersView } from "./components/FiltersView";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { NewTodoFormView } from "./components/NewTodoFormView";
import { SummaryView } from "./components/SummaryView";
import { TodoListView } from "./components/TodoListView";

import styles from "./styles.module.scss";

const nextId = (
  (i = 0) =>
  () =>
    i++
)();

@proxiable
class Todo {
  id = nextId();

  constructor(public text = "", public done = false) {}

  toggle() {
    this.done = !this.done;
  }
}

@proxiable
class TodoApp {
  todos: Todo[] = [];

  addTodo(text: string) {
    this.todos.push(new Todo(text));
  }

  removeTodo(todo: Todo) {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    this.todos.splice(index, 1);
  }

  isEmpty() {
    return this.todos.length === 0;
  }
}

const store = new TrackedArbor(new Arbor(new TodoApp()));

store.subscribe((event) => {
  console.log(">>>>", event);
});

setTimeout(() => {
  store.state.addTodo("Do the dishes");
  store.state.addTodo("Do the homework");
  store.state.removeTodo(store.state.todos[0]);
}, 2000);

export default function App() {
  return (
    <Flex justify="center">
      <Flex align="stretch" className={styles.App} orientation="column">
        <Header />
        <NewTodoFormView />
        <SummaryView />
        <FiltersView />
        <TodoListView />
        <Footer />
      </Flex>
    </Flex>
  );
}
