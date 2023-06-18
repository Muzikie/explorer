/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

/* Internal dependencies */
import {
  getGenerators,
} from '~/models/entity.server';
import type {
  ListLoaderProps,
  GeneratorLoaderData,
} from './types';
import List from '~/components/common/List';
import { generatorTableConfig } from '~/configs/entity/generator';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const offset = url.searchParams.get('offset');
  const generatorID = url.searchParams.get('generatorID');
  const params: Record<string, string | null> = {
    generatorID,
    limit,
    offset
  };
  const generators = await getGenerators({ params });

  return json<GeneratorLoaderData>({
    ...generators,
    params,
  });
};

const GeneratorsScreen = () => {
  const {
    data,
    meta,
  } = useLoaderData() as GeneratorLoaderData;

  return (
    <section className="container m-auto">
      <List
        entity="generator"
        itemConfig={generatorTableConfig}
        items={data}
        meta={meta}
      />
    </section>
  );
};

export default GeneratorsScreen;
