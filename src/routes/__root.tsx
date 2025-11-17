import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			{/* DevTools solo en desarrollo */}
			<TanStackRouterDevtools />
		</>
	),
});
