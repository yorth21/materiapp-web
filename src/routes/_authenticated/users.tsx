import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/users')({
	component: UsersComponent,
});

function UsersComponent() {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-4">Usuarios</h1>
			<p>Lista de usuarios del sistema</p>
		</div>
	);
}
