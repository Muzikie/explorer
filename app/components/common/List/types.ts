import type { ComponentType } from 'react';

import type { MetaProps } from '~/configs';

export type GeneratePageNumbers = (totalPages: number, currentPage: number) => number[];

export interface DirectionButtonProps {
	total: number;
	current: number;
	direction: 'next'|'prev';
}

export interface NumberButtonProps {
	page: number;
	current: number;
}

export interface ListProps<T> {
	items: T[];
	meta: MetaProps;
	rowComponent: ComponentType;
}
