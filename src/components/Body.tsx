import * as React from 'react';
import { IAppState } from '../store/IAppState';
import { observer } from 'mobx-react';
import { TreeInput } from './TreeInput';
import { TreeOutput } from './TreeOutput';
import './Body.scss';
import { useAppStateContext } from '../store/AppState';

interface BodyProps {
  appState: IAppState;
}

const BodyRenderer: React.FunctionComponent<BodyProps> = observer(props => {
  const changeHandler = (newVal: any): void => {
    props.appState.setState({
      ...props.appState,
      treeNode: newVal,
    });
  };

  return (
    <main className="App-body">
      {props.appState!.bodyMessage}
      <TreeInput onChange={changeHandler} />
      <div className="OutputContainer">
        <TreeOutput treeNode={props.appState.treeNode} />
      </div>
    </main>
  );
});

export const Body: React.FunctionComponent<{}> = props => {
  const appState = useAppStateContext();
  return <BodyRenderer appState={appState} />;
};

export default Body;
