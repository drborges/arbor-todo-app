import { useArbor } from "@arborjs/react";
import { Caption, Card, SectionSeparator } from "playbook-ui";

import { store } from "../../stores/todos";

export const SummaryView = () => {
  const todos = useArbor(store);

  return (
    <SectionSeparator lineStyle="dashed" paddingX="sm">
      <Card borderRadius="rounded" justifyContent="center" padding="none">
        <Caption
          paddingLeft="xs"
          paddingRight="xs"
          size="xs"
          text={`${todos.done.length} of ${todos.length} completed`}
        />
      </Card>
    </SectionSeparator>
  );
};
