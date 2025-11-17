import { Link } from '@tanstack/react-router';
import { Brain, ChartColumnBig, Folder, LayoutDashboard } from 'lucide-react';
import { NavMain } from '@/components/navigation/nav-main';
import { NavUser } from '@/components/navigation/nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	navMain: [
		{
			title: 'Dashboard',
			url: '/dashboard',
			icon: LayoutDashboard,
		},
		{
			title: 'My curriculum',
			url: '/curriculum',
			icon: ChartColumnBig,
		},
		{
			title: 'Recommended',
			url: '/recommended',
			icon: Folder,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<Link
							to="/"
							className="p-1.5 flex flex-row gap-2 place-items-center"
						>
							<Brain className="size-5!" />
							<span className="text-xl font-semibold">Materiapp</span>
						</Link>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
