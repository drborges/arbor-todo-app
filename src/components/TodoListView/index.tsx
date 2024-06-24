import { useArbor } from "@arborjs/react";
import { Body, Card, Flex, List, ListItem } from "playbook-ui";

import { store as todoStore } from "../../stores/todos";
import { store as filterStore } from "../../stores/filter";

import { TodoView } from "../TodoView";

import styles from "./styles.module.scss";

export const TodoListView = () => {
  const todos = useArbor(todoStore);
  const filter = useArbor(filterStore);
  const filteredTodos = filter.apply(todos);

  console.log(">>>>> Rendering TodoListView");

  return (
    <Card marginX="sm" marginTop="xs" padding="none">
      <List>
        {filteredTodos.map((todo, index) => (
          <ListItem key={todo.id}>
            <TodoView id={todo.id} position={index + 1} />
          </ListItem>
        ))}
      </List>

      {filteredTodos.isEmpty() && (
        <Flex
          align="center"
          justify="center"
          padding="sm"
          className={styles.EmptyList}
        >
          <Body color="light" text="Noice! Nothing to do today?" size="xs" />
        </Flex>
      )}
    </Card>
  );
};
