import { memo } from "react";
import classnames from "classnames";
import { useArbor } from "@arborjs/react";
import { Body, Button, Flex, FlexItem, TextInput } from "playbook-ui";

import { todoById } from "../../selectors/todoById";

import styles from "./styles.module.scss";

export type TodoViewProps = {
  id: string;
  position: number;
};

export const TodoView = memo(({ id, position }: TodoViewProps) => {
  // Connects this component to the todos store, but only watches changes to the
  // todo referenced by the given id.
  // Because Arbor supports "path tracking", this component will only re-render when
  // changes are made to fields of the todo that this component knows about, e.g.
  // id, status and content. If todo had other fields, mutations triggered to them
  // would not cause this component to re-render since the component does not care
  // about them.
  const todo = useArbor(todoById(id));
  // Arbor can replace useState and allow for better DX when managing local state.
  //
  // With that said, I'd recommend extracting as much logic as you can into custom
  // abstractions. The little the components know the easier it is to read and test them,
  // as well as test the logic isolated from the React lifecycle.
  //
  // The state below for instance, could be extracted into a TodoViewMode class, leading
  // to simpler code in the React component, something like:
  // const mode = useArbor(new TodoViewMode())
  const mode = useArbor({
    editing: false,
    toggle() {
      mode.editing = !mode.editing;
    },
  });

  return (
    <Flex align="center" paddingX="sm" flexGrow={1} className={styles.TodoView}>
      <Body text={`${position}.`} marginRight="xs" />

      <FlexItem grow marginRight="sm">
        {!mode.editing && (
          <Body
            className={styles[todo.status]}
            paddingX="sm"
            text={todo.content}
          />
        )}

        {mode.editing && (
          <TextInput
            marginBottom="none"
            onChange={todo.onChange}
            onBlur={mode.toggle}
            onKeyDown={(e: KeyboardEvent) => {
              if (e.code === "Enter") {
                mode.toggle();
              }
            }}
            value={todo.content}
          />
        )}
      </FlexItem>

      <Flex justify="stretch">
        <Button
          className={classnames(styles.DeleteBtn, styles.Btn)}
          disabled={mode.editing}
          marginRight="xs"
          onClick={todo.delete}
          paddingX="sm"
          paddingY="xs"
          variant="link"
        >
          Delete
        </Button>

        <Button
          className={styles.Btn}
          marginRight="xs"
          onClick={mode.toggle}
          paddingX="sm"
          paddingY="xs"
          variant="secondary"
        >
          {mode.editing ? "Done" : "Edit"}
        </Button>

        <Button
          className={styles.Btn}
          disabled={mode.editing}
          onClick={todo.toggle}
          paddingX="sm"
          paddingY="xs"
        >
          {todo.done ? "Undo" : "Finish"}
        </Button>
      </Flex>
    </Flex>
  );
});
