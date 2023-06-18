import type { Entity, EntityName } from '~/configs';
import type { KeyValue } from './types';

export const removeNullValues = (obj: KeyValue): KeyValue => {
  const newObj: KeyValue = {};
  for (const key in obj) {
    if (obj[key] != null) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

const idMapper: Record<EntityName, string> = {
  block: 'id',
  transaction: 'id',
  subscription: 'subscriptionID',
  collection: 'collectionID',
  audio: 'audioID',
  profile: 'profileID',
}

export const getEntityId = (data: Entity, entity: EntityName): string =>
  data[idMapper[entity]];
