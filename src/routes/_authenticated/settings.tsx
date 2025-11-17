import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/settings')({
	component: SettingsComponent,
});

function SettingsComponent() {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-4">Configuración</h1>
			<p>Configuración del sistema</p>
		</div>
	);
}
