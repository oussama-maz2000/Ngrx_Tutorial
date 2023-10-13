import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Product: {},
};

export const entityConfiguration: EntityDataModuleConfig = {
  entityMetadata,
};
