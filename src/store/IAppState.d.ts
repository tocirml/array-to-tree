import { IObservable, IObservableValue } from 'mobx';

interface IAppState {
  title: string;
  bodyMessage: string;
  treeNode: BinTreeNode;
  smallestTreeId: string | number;

  setState(newState: IAppState);
}
