# Challengers Editor
챌린저스 서비스를 위해 제작한 에디터 라이브러리입니다.

## 사전조건
`Challengers Editor`은 `react` 및 `react-dom` 모듈이 설치되어야 합니다. 
만약 설치되지 않았다면, 설치단계에서 `react`관련 의존 모듈 미설치에 관한 경고가 발생하게 됩니다. 
`react` 및 `react-dom` 설치 방법은 다음과 같습니다.

```bash
> npm install react react-dom --save
```

`Challengers Editor`는 `react` **18** 버전 이상에서 테스트되었으며, 이전 버전도 모두 지원을 하고 있습니다.

## 설치
`Challengers Editor`는 [npm 저장소](https://www.npmjs.com/package/editor_likelion)에 배포되어있습니다.

1. 프로젝트 루트에서 터미널을 실행하여 다음과 같이 실행해주세요
```bash
> npm install editor_likelion --save
```
`--save` 옵션을 활용하여 향후 의존 모듈을 재설치할때에도 자동으로 설치하도록 권장합니다.
설치 후 `package.json` 파일에 다음과 같이 `editor_likelion` 모듈이 추가됩니다.
```json
{
  "depedencies": {
    "editor_likelion": "^1.1.0",
  }
}
```

## 사용법

### 컴포넌트 임포트
`react` 기반 웹앱을 구성할 때 사용할 수 있는 기본 `App.jsx(tsx)`는 다음과 같이 구성할 수 있습니다.
```html
import React from "react";
import { Editor } from "editor_likelion";

function App() {
  return (
    <div className="App">
      <Editor/>
    </div>
  );
}
export default App;

```

### 컴포넌트 예제
`challengers Editor`은 다음과 같이 사용할 수 있습니다.
에디터의 속성을 별도의 변수로 설정하여 스프레드 연산자를 통해 부여하거나, 직접 에디터에 속성 값을 넣어줄 수 있습니다.

```javascript
import React from "react";
import { Editor } from "editor_likelion";

function App() {
  const params = {
    defaultFontColor: "",
    defaultFontSize: "",
    defaultWidth: "",
    placeholder: "",
    environmentColor: "",
    editorID: "challgers",
  };

  return (
    <div className="App">
      <Editor {...params} />
    </div>
  );
}

export default App;


```

## 프로퍼티


### editorID?: string
*(Optional)*

에디터의 고유 ID를 지정할 수 있습니다. 지정을 하지 않을 경우 자동으로 난수와 함께 ID가 부여됩니다.

### defaultFontSize?: string
*(Optional)*

에디터 본문의 글꼴 초기 색상을 지정할 수 있습니다.

### defaultFontSize?: string
*(Optional)*

에디터 본문의 글꼴 초기 크기를 지정할 수 있습니다.

### defaultWidth?: string
*(Optional)*

에디터의 초기 가로 사이즈를 조정할 수 있습니다. 기본적으로 자동 반응형이 적용되어있습니다.

### placeholder?: string
*(Optional)*

에디터 초기화시 들어갈 초기값을 설정할 수 있습니다. 에디터가 허용하는 일부  html을 포함할 수 있습니다.

### environmentColor?: string
*(Optional)*
*(dark, white)*

브라우저의 색상 환경에 따라 에디터 모드를 변경할 수 있습니다. 다크모드와 화이트모드로 전환할 수 있으며 기본 값은 white 입니다.

## 케이스별 예제

### 크로스 에디터의 Method 사용법
서버와의 통신을 위해 `<Editor/>` 컴포넌트의 에디터 인스턴스를 제공합니다.
React의 [Ref](https://ko.reactjs.org/docs/refs-and-the-dom.html)를 이용하여 컴포넌트의 에디터 인스턴스를 획득할 수 있습니다.

```javascript
import React, { useRef } from "react";
import { Editor } from "editor_likelion";

function App() {
  // useRef 객체 생성
  const editorRef = useRef(null);

  /** 에디터 인스턴스를 흭득하기 위한 onClick 함수를 생성합니다. */
  const handleClick = () => {
    // 에디터의 인스턴스를 흭득, current 값이 undefined일 수도 있으니 체크 필요
    if (editorRef.current) {
      console.log(editorRef.current);
      // 에디터 인스턴스에서 에디터의 HTML 엔티티 추출
      console.log((editorRef.current as HTMLBodyElement).innerHTML);
    }
  };

  return (
    <div className="App">
      {/* Editor 컴포넌트에 Ref 객체를 연결합니다. */}
      <Editor ref={editorRef} />
      <button type="button" onClick={handleClick}>
        에디터 인스턴스 불러오기
      </button>
    </div>
  );
}

export default App;
```
