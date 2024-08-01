import {useState} from 'react';
import './App.css';


function UserList() {
  // 유저 초기 목록과 유저가 추가될 목록을 담을 변수명을 설정
  const [users, setUsers] = useState([]); 
  const [name, setName] = useState('');

  //모두 초기값이 아무것도 없는 상태
  //useState(''); useState(""); useState(null);

  //빈 배열인 상태 useState([]); = 목록이 비어있음
  //초기 변수인 users가 아무런 유저 목록을 담고 있지 않기 때문에 users = []; 빈 배열로 설정

  /*
  <1번>
  const 기능 = () => {
    return 리턴값;  
  } 

  <2번>
  const 기능 = () => (
    //return 없음
  )

  ======================
  <1번 예제>
  const 인사기능 = () => {
    const 인사메세지 = "안녕하세요";

    return 인사메세지;
  }
  
  <2번 예제>
  <p>{인사기능}</p>

  const 인사기능 = () => (
    alert("좋은 아침 입니다 ~!~!~!");
  )
  */

  /*
  <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
  <button                         onClick ={( ) => 삭제버튼}>삭제하기</button>

  e = 특정 변화는 값이나 변화가 있는 것을 감지
  button의 경우 버튼을 클릭하기만 하고, 특정 값이 랜덤으로 설정되는 부분이 없기 때문에
  버튼에서는 e와 같은 변수명을 생략

  input의 경우 사용자가 어떤 값을 작성할지 컴퓨터가 모르기 때문에
  사용자가 어떤 값을 입력한다는 것을 이벤트로 받아들이고, 이벤트가 감지되면 value값을 가져옴
  */
  const 추가버튼 = () => {
    setUsers([...users, name]); // ...기존유저목록 + value값(홍길동) => 추가!
    setName(""); //INPUT창 비우기
  }

  // filter = 배열에서 결과가 true인 값만 반환
  const 삭제버튼 = (index) => {         
    //users에 있는 유저 목록에서 user = 유저명, i = users에 있는 유저가 저장된 번호
    const 삭제후유저목록 = users.filter(  (user, i) => i !== index);
    /*
    const 삭제후유저목록 = users.filter(  (user, i) => i !== index);
    위 삭제 후 유저목록 기능은 삭제하기를 선택한 번호 1개만 삭제

    const 삭제후유저목록 = users.filter(  (user, i) => i === index);
    삭제 후 유저목록 기능은 삭제하기를 선택한 번호 이외 모든 번호 지우기


    users   . filter((user,        i         ) =>         i             !==             index);
    유저목록들       유저명, 각유저가가입한번호 =>  배열에저장된번호 같지않은유저번호만 삭제하려고누른 번호가 
    유저목록에 넣어주겠다
    */
    setUsers(삭제후유저목록); // 유저목록 교체하기
  }
{/*

    const 추가버튼 = () => {}   VS    const 추가버튼 = () => ()

    <JAVA>
    public String 추가버튼 {
      return String "자료값";
    }

    <React>
    const 추가버튼 = () => {} 
      └─ return 존재
      └─ return 필수 아님, 작성할 수 있다는 의미

=====================================================================

    <JAVA>
    public void 추가버튼 {
      System.out.print("안녕하세요");
    }
    
    <React>
    const 추가버튼 = () => ()
      └─ return 없음
*/}
  return (
    <div className="App">
      <h1>유저 리스트</h1>
      <h3>유저 추가하기</h3>
      <input type='text'
             value={name}
             onChange={(e) => setName(e.target.value)}
      />
      <button onClick={추가버튼}>추가하기</button>
{/*                                ↓꺼낼유저
      {유저목록들.하나씩모두꺼내기((유저1명, 고유번호) => (
        <li key={고유번호}>{유저1명}</li>
                            ↑꺼낸유저
      ) )}

      map = for = 하나씩모두꺼내기

      onChange = input 의 텍스트가 바뀔 때마다 발생하는 이벤트
      (e.target.value)
      ★★★ target 안에 event가 발생 그 값(value)를 가져와랏!!
      e => 마우스를 클릭하거나 키보드를 치거나 하는 모든 이벤트
      input창 => target (목표)
      name(input창 안에 적은 이름) => value (값)
*/}
      <h3>유저 리스트 목록보기</h3>
      <l1>인덱스. 유저명</l1><br /><br />
      {users.map((user, index) => (
        <li key={index}>
          {index}. {user}
          <button onClick={() => 삭제버튼(index)}>삭제하기</button>
          {/*              ↑비어있는 이유 : value값을 받아오지 않음 */}
          {/* (e) vs () => value값의 유무 */}
        </li>
      ) )}
    </div>
  );
}

export default UserList;
