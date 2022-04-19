export interface FooterNavLink {
	name: string;
	link?: string;
	subLinks?: FooterNavLink[];
	button?: boolean;
	subClass?: string;
	onClick?: () => void;
}