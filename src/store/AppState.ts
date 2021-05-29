import * as React from 'react';
import '../config/configureMobx';
import { observable, action, makeObservable } from 'mobx';
import { IAppState } from './IAppState';
import { BinTreeNode } from '../models/TreeNode';
import { createContext } from 'react';
import { findSmallestTreeId } from '../utils/binaryTreeUtils';

export class AppState implements IAppState {
  @observable title = 'Tree Traversal';

  @observable bodyMessage = 'Process the input text to a BinTreeNode';

  @observable treeNode = new BinTreeNode('root', null, null);

  // this added field on the state will tell react what treeBode to paint border green as per Problem 3
  @observable smallestTreeId = 'root';

  constructor() {
    makeObservable(this);
  }

  @action setState(newState: IAppState) {
    this.title = newState.title;
    this.bodyMessage = newState.bodyMessage;
    this.treeNode = newState.treeNode;
    this.smallestTreeId = findSmallestTreeId(newState.treeNode); // parsing the tree to return the correct id
  }
}

export const AppStateContext = createContext<IAppState>(new AppState());

export const AppStateContextProvider = AppStateContext.Provider;

export const AppStateContextConsumer = AppStateContext.Consumer;

export const useAppStateContext = () => {
  return React.useContext(AppStateContext);
};
