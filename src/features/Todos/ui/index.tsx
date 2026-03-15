import { observer } from "mobx-react-lite";

import { TodosStoreProvider } from "../../../entities/todos/store/todos.provider"

import { List } from './List'

export const TodosView = observer(() => {
    return (
        <TodosStoreProvider>
            <List/>
        </TodosStoreProvider>
    )
})