import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 죄할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button //onclick을 통해 버튼이 클릿 되었을 때 호출할 함수를 지정
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 State가 호출됐음');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
        <button //onclick을 통해 버튼이 클릿 되었을 때 호출할 함수를 지정
          onClick={() => {
            this.setState(
              {
                number: number - 1,
              },
              () => {
                console.log('방금 State가 호출됐음');
                console.log(this.state);
              }
            );
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
