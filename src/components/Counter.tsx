import React from 'react';
import './Counter.scss';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = (counter: number) => {
    if (counter % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          Counter
          {' '}
          {counter}
        </h1>
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.addOne()}
          >
            +1
          </button>
          <button
            type="button"
            onClick={() => this.add100()}
          >
            +100
          </button>
          <button
            type="button"
            onClick={() => this.increase(counter)}
          >
            increase
          </button>
        </div>
      </>
    );
  }
}
