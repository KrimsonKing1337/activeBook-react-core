export const actionsTypes = {
  INCREMENT: 'INCREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',
} as const;

export type IncrementAction = {
  type: typeof actionsTypes.INCREMENT | typeof actionsTypes.INCREMENT_ASYNC;
};

export function increment(): IncrementAction {
  return {
    type: actionsTypes.INCREMENT,
  };
}

export function incrementAsync(): IncrementAction {
  return {
    type: actionsTypes.INCREMENT_ASYNC,
  };
}

export type IncrementActionsTypes = IncrementAction;
