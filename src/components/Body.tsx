import * as React from 'react';
import { IAppState } from '../store/IAppState';
import { observer } from 'mobx-react';
import { TreeInput } from './TreeInput';
import { TreeOutput } from './TreeOutput';
import './Body.scss';
import { useAppStateContext } from '../store/AppState';
import { TreeTextArea } from './TreeTextArea';

interface BodyProps {
  appState: IAppState;
}

const BodyRenderer: React.FunctionComponent<BodyProps> = observer(props => {
  // this function was moved outside the template, to keep it cleaner
  const changeHandler = (newVal: any): void => {
    props.appState.setState({
      ...props.appState,
      treeNode: newVal,
    });
  };

  return (
    <main className="App-body">
      <div className="body-message">{props.appState!.bodyMessage}</div>
      <TreeInput onChange={changeHandler} />
      <TreeTextArea
        onChange={changeHandler}
        treeNode={props.appState.treeNode}
      />
      Output:
      <div className="OutputContainer">
        <TreeOutput
          treeNode={props.appState.treeNode}
          smallestTreeId={props.appState.smallestTreeId}
        />
      </div>
    </main>
  );
});

export const Body: React.FunctionComponent<{}> = props => {
  const appState = useAppStateContext();
  return <BodyRenderer appState={appState} />;
};

export default Body;
