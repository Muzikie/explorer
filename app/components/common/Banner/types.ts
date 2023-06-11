import type { ReactNode } from 'react';

export interface BannerProps {
	title?: string;
	subtitle?: string;
	dismiss?: () => void;
	content?: ReactNode;
}
