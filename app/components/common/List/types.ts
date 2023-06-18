import type { MetaProps, EntityName } from '~/configs';

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

export interface EmptyProps {
	entity: string
}

export interface ListHeaderItem {
	title: string;
	className: string;
	value: string|number|boolean;
}

export type ListHeader = {
	gridClassName: string;
	items: ListHeaderItem[]
};

type itemConfig<T> = (date?: T) => ListHeader

export interface ListProps<T> {
	entity: string;
	itemConfig: itemConfig<T>;
	items: T[];
	meta?: MetaProps;
}

export interface ListHeaderProps<T> {
	itemConfig: itemConfig<T>;
}

export interface RowProps<T> {
	data: T;
	entity: EntityName;
	itemConfig: (data: T) => ListHeader;
}

export interface ColumnProps {
	data: string|number|boolean;
	className: string;
}
