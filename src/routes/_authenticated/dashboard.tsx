import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/dashboard')({
	component: DashboardComponent,
});

function DashboardComponent() {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-4">Dashboard</h1>
			<div className="grid grid-cols-3 gap-4">
				<div className="p-6 bg-white rounded-lg shadow">
					<h3 className="text-gray-500">Total Usuarios</h3>
					<p className="text-3xl font-bold">1,234</p>
				</div>
				<div className="p-6 bg-white rounded-lg shadow">
					<h3 className="text-gray-500">Ventas</h3>
					<p className="text-3xl font-bold">$45,678</p>
				</div>
				<div className="p-6 bg-white rounded-lg shadow">
					<h3 className="text-gray-500">Pedidos</h3>
					<p className="text-3xl font-bold">567</p>
				</div>
			</div>
		</div>
	);
}
