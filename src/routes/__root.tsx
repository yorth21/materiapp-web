import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
	component: () => (
		<div>
			<nav className="p-4 bg-gray-800 text-white">
				<div className="flex gap-4">
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>
					<Link to="/dashboard" className="[&.active]:font-bold">
						Dashboard
					</Link>
				</div>
			</nav>
			<Outlet />
			{/* DevTools solo en desarrollo */}
			<TanStackRouterDevtools />
		</div>
	),
});
