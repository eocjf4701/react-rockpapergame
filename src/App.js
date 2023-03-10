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
    img:"https://png.pngtree.com/png-clipart/20190920/original/pngtree-illustrated-scissors-gesture-illustration-png-image_4673227.jpg",
  },
  paper:{
    name:"Paper",
    img:"https://mblogthumb-phinf.pstatic.net/MjAxODA2MThfMTM3/MDAxNTI5MzMyNDE1MDkz.qf2xpioWiMO6A6wFtBhWgfEV7C7rsLv7zaVIEGLlwoog.gzCQroiii_BecftKsy0YsAzb3cMyYemt0Z5_et0BSWQg.JPEG.kidarinusu/eb32b10b28f5043ecd0b4107e7494392e36ae3d01bb8124297f3c97f_1280.jpg?type=w800"
  },
  noChoice:{
    name:"noChoice",
    img:"http://image.yes24.com/blogimage/blog/l/m/lmok311/re.jpg"
  }
};
function App() {
  const [userSelect, setUserSelect] = useState(choice["noChoice"]);
  const [computerelect, setComputerSelect] = useState(choice["noChoice"]);
  const [result, setResult] = useState(["Choice", "Choice"]);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgemnet(choice[userChoice], computerChoice));
  }

  const judgemnet = (user, computer) => {
    
    if(user.name === computer.name) {
      return ["tie", "tie"];
    }

    if(user.name === 'Scissors') {
      return computer.name === 'Rock' ? ["Lose", "Win"] : ["Win", "Lose"];
    }

    if(user.name === 'Rock') {
      return computer.name === 'Scissors' ? ["Win", "Lose"] : ["Lose", "Win"];
    }

    if(user.name === 'Paper') {
      return computer.name === 'Rock' ? ["Win", "Lose"] : ["Lose", "Win"];
    }

  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    itemArray.splice(3);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];

  }
  
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result[0]}/>
        <Box title="Computer" item={computerelect} result={result[1]}/>
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
