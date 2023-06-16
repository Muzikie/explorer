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

export interface ListHeaderItem {
	title: string;
	className: string;
	value: string|number|boolean;
}

export type ListHeader = ListHeaderItem[];

type itemConfig<T> = (date?: T) => ListHeader

export interface ListProps<T> {
	emptyTitle: string;
	itemConfig: itemConfig<T>;
	items: T[];
	meta: MetaProps;
}

export interface ListHeaderProps<T> {
	itemConfig: itemConfig<T>;
}

export interface RowProps<T> {
	data: T;
	itemConfig: (data: T) => ListHeader;
}

export interface ColumnProps {
	data: string|number|boolean;
	className: string;
}
