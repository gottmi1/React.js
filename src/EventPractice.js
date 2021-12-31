// import { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: '',
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text" // 타입을 정해줌(일종의 타입 스크립트)
//           name="message" // id,class처럼 name을 정해줌
//           placeholder="아무거나 입력해 보세요" // 빈칸에 떠 있을 텍스트
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({
//               message: '',
//             });
//           }}
//         />
//       </div>
//     );
//   }
// } 리팩토링 하기 전 코드

// constructor(props) {
//   super(props);
//   this.handleChange = this.handleChange.bind(this); // bind(바인딩) 하지 않을 경우 this가 windown(strick의 경우 undefined)를 가르키게 된다.
//   this.handleClick = this.handleClick.bind(this);
// } 2차 리팩토링. 이걸 더 간단하게 할 수 있는게 아래 문법

// handleChange(e) {
//   this.setState({
//     message: e.target.value,
//   });
// }

// handleClick() {
//   alert(this.state.message);
//   this.setState({
//     message: '',
//   });
// } 2차 리팩토링 전

// ======================================================================

// handleChange = (e) => {
//   this.setState({
//     message: e.target.value,
//   });
// };

// handleClick = () => {
//   alert(this.state.message);
//   this.setState({
//     message: '',
//   });
// }; 3차 리팩토링

// import { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ' : ' + this.state.message);
//     this.setState({
//       message: '',
//       username: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text" // 타입을 정해줌(일종의 타입 스크립트)
//           name="username" // id,class처럼 name을 정해줌
//           placeholder="사용자명" // 빈칸에 떠 있을 텍스트
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text" // 타입을 정해줌(일종의 타입 스크립트)
//           name="message" // id,class처럼 name을 정해줌
//           placeholder="아무거나 입력해 보세요" // 빈칸에 떠 있을 텍스트
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

//4차 리팩토링(함수 컴포넌트로 구현하기)

// import { useState } from 'react';

// const EventPractice = () => {
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = (e) => {
//     alert(username + ' : ' + message);
//     setUsername('');
//     setMessage('');
//   };
//   const onKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해 보세요"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };

// export default EventPractice; 5차 리팩토링

// 인풋이 두 개 밖에 없다면 이런 위의 코드도 나쁘지않지만, 인풋의 개수가 많아질 것 같으면 e.target.name을 사용하는 편이 효율적이다.
// 다음으로는 useState를 사용하는 상태에 문자열이 아닌 객체를 넣어본다.

import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form내용을 이 자리에 복사한 뒤에
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = (e) => {
    alert(username + ' : ' + message);
    // setUsername('');
    // setMessage(''); 아래 코드로 대체
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
