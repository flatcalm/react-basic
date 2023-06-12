import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import Hello from './Hello';
import ChangeEvent from './component/chap01_event/ChangeEvent';
import ClickEvent from './component/chap01_event/ClickEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';

// 리액트에서는 하나의 컴포넌트가 여러개의 엘리먼트를 반환할 수 있습니다.
// JSX를 작성할 때 return 문 안에 반드시 하나의 최상위 태그가 있어야 합니다.
// react는 하나의 컴포넌트만 반환(return)할 수 있기 때문.
// Fragment를 사용하면 의미없는 태그를 줄여 가독성을 좋게 합니다.
// <Fragment> 태그들 </Fragment> -> Fragment는 생략 가능
// <> 태그들 </>
// react는 반드시 닫는 태그가 필요.
// ex) <br> <hr> 등을 단독으로 작성 시 컴파일 에러
// -> <br /> <hr /> 같은 형식으로 작성.
// react의 return()의 () 안의 값은 JSX 형식.
function App() {

  const looping = () => {
    const helloList = [];

    for(let i=0; i<5; i++) {
      helloList.push(<SayHello />);
    }
    return helloList;
  }

  // JSX 문법에서는 스크립트를 코드로 직접 사용이 불가능.
  // {} 안에서 함수의 호출문이나 변수 참조는 가능.
  return (
    <>
      <SubmitEvent />
    </>
  );
}

export default App;
