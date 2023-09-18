// 리액트는 컴포넌트 단위로 개발
// 컴포넌트(component) : 페이지, 세부화면, 위젯, 아이콘, 버튼
// : 재사용이 가능한 UI 조각
// : 템플릿(틀) + 작동코드

// 리액트 컴포넌트는 파일명과 함수명을 파스칼케이스로 작성
// 원래 리액트 컴포넌트는 class/function 2가지 형태였고,
// 기본이 class 형식이었음
// 원래 자바스크립트에서 생성자함수 new Person()는 원래 파스칼케이스
// function Person() { name; age; function printInfo() {} }

// 리액트 컴포넌트 :
// JSX Element를 반환하는 함수

import react_icon from "./assets/react-icon.png";
import intro from "./assets/intro.mp4";
import WelcomeMessage from "./components/WelcomeMessage";
import Button from "./components/Button";

const App = () => {
  const handleClickPrimaryButton = () => {
    alert("Click Me!");
  };
  const handleClickSecondaryButton = () => {
    alert("Cancle");
  };

  // React.createElement(component, props, ...children)
  // React.createElement("div", null, "Hello, React!!")
  return (
    <div>
      {/* 이미지 사용 */}
      <img src={react_icon} alt="react icon" height={16} />
      <span>Hello, React!!</span>
      {/* 비디오 사용 */}
      <div>
        <video width={480} height={270} controls loop autoPlay muted>
          <source src={intro} type="video/mp4" />
        </video>
      </div>
      {/* React Props에 값을 대입 */}
      <WelcomeMessage name={"React Typescripts"} />
      {/* props-down, event-up */}
      {/* 부모-자식 컴포넌트간 데이터 교환방법   */}
      <Button
        label="Click me!"
        color="primary"
        onClick={handleClickPrimaryButton}
      />
      <Button
        label="Cancle"
        color="secondary"
        onClick={handleClickSecondaryButton}
      />
    </div>
  );
};

export default App;
