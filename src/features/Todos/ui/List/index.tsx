import { useTodosStore } from '../../../../entities/todos/store/todos.provider';

export const List = () => {
  const { todos } = useTodosStore();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
