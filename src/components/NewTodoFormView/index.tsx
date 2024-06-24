import { useArbor } from "@arborjs/react";
import { Button, Card, TextInput } from "playbook-ui";

import { TodoForm } from "../../models/TodoForm";
import { store } from "../../stores/todos";

export const NewTodoFormView = () => {
  const form = useArbor(new TodoForm(store));

  return (
    <form onSubmit={form.onSubmit}>
      <Card margin="sm" padding="md" shadow="deep" flexDirection="row">
        <TextInput
          flexGrow={1}
          marginRight="xs"
          marginBottom="none"
          onChange={form.onChange}
          placeholder="What's next?"
          value={form.value}
        />

        <Button htmlType="submit" disabled={form.isEmpty()}>
          Add
        </Button>
      </Card>
    </form>
  );
};
