import { createBrowserRouter } from 'react-router-dom';
import { todosRoutes } from './todos.routes';

export const router = createBrowserRouter([...todosRoutes]);
