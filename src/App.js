import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면 초록 지면 빨강 비기면 검정)
const choice = {
  rock:{
    name:"Rock",
    img:"https://us.123rf.com/450wm/anwarsikumbang/anwarsikumbang1508/anwarsikumbang150800102/44299873-%EC%A3%BC%EB%A8%B9-%EC%86%90-%EB%A7%8C%ED%99%94-%EC%BA%90%EB%A6%AD%ED%84%B0-%EB%B2%A1%ED%84%B0-%EC%95%84%ED%8A%B8-%EA%B7%B8%EB%A6%BC.jpg?ver=6",
  },
  scissors:{
    name:"Scissors",
    img:"https://mblogthumb-phinf.pstatic.net/20130509_100/sskyes_13680790979837mYJl_PNG/daum_net_20130204_130120.png?type=w2",
  },
  paper:{
    name:"Paper",
    img:"https://mblogthumb-phinf.pstatic.net/MjAxODA2MThfMTM3/MDAxNTI5MzMyNDE1MDkz.qf2xpioWiMO6A6wFtBhWgfEV7C7rsLv7zaVIEGLlwoog.gzCQroiii_BecftKsy0YsAzb3cMyYemt0Z5_et0BSWQg.JPEG.kidarinusu/eb32b10b28f5043ecd0b4107e7494392e36ae3d01bb8124297f3c97f_1280.jpg?type=w800"
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer"/> */}
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
