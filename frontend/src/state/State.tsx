import React, { createContext } from 'react';
import { produce, Draft } from 'immer';
import { IUserBase } from 'memegram-commons/models/User.model';
import { createInitialState } from './createInitialState';

type DraftEditor<S> = (draft: Draft<S>) => void;
type Produce = (mutateFn: DraftEditor<State>) => void;
type StateWithProduce = State & { produce: Produce };

export default interface State {
  loggedIn: boolean;
  user?: IUserBase;
}

export const AppStateContext = createContext({} as StateWithProduce);
export const useAppState = () => {
  return React.useContext(AppStateContext);
};

export class AppState extends React.Component<{}, StateWithProduce> {
  private readonly produce: Produce = (mutateFn) => {
    const nextState = produce(this.state, (draft) => {
      // we pass the a immer state's draft to the given
      // function
      // @ts-ignore
      mutateFn(draft);
    });

    // once we got the next version of the state, we passed to the
    // provided `setState` function, so react can do his job.
    this.setState(nextState);
  };

  constructor(props: any) {
    super(props);
    const initialState: State = createInitialState();
    this.state = {
      ...initialState,
      produce: this.produce,
    };
  }

  render() {
    return <AppStateContext.Provider value={this.state}>{this.props.children}</AppStateContext.Provider>;
  }
}
