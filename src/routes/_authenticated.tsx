import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
	component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<aside className="w-64 bg-gray-900 text-white">
				<div className="p-4">
					<h2 className="text-xl font-bold mb-6">Dashboard</h2>
					<nav className="space-y-2">
						<Link
							to="/dashboard"
							className="block px-4 py-2 rounded hover:bg-gray-800 [&.active]:bg-gray-800"
						>
							📊 Dashboard
						</Link>
						<Link
							to="/users"
							className="block px-4 py-2 rounded hover:bg-gray-800 [&.active]:bg-gray-800"
						>
							👥 Usuarios
						</Link>
						<Link
							to="/settings"
							className="block px-4 py-2 rounded hover:bg-gray-800 [&.active]:bg-gray-800"
						>
							⚙️ Configuración
						</Link>
					</nav>
				</div>
			</aside>

			{/* Contenido principal */}
			<main className="flex-1 bg-gray-50">
				<Outlet />
			</main>
		</div>
	);
}
