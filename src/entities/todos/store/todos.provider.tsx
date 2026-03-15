import { useState, type ReactNode } from "react"
import { createDi } from "../../../shared"
import { TodosStore } from "./todos.store";

export const { Injector, useDi: useTodosStore } = createDi<TodosStore>();

export const TodosStoreProvider = ({ children }: {children: ReactNode}) => {
    const [todosStore] = useState(() => new TodosStore());
    console.log('todos', todosStore)

    return <Injector value={todosStore}>{children}</Injector>
}