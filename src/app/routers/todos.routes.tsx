import { Outlet, type RouteObject } from 'react-router-dom';
import { TodosStoreProvider } from '../../entities/todos/store/todos.provider';
import { TodosPage } from '../../pages/todos.page';
import { FavoritesPage } from '../../pages/favorites.page';

export const todosRoutes: RouteObject[] = [
  {
    element: <TodosStoreProvider children={<Outlet />} />,
    children: [
      { index: true, element: <TodosPage /> },
      { path: '/favorites', element: <FavoritesPage /> },
    ],
  },
];
