import React, {useState} from "react";

function 예제2번 () {
    // const 안에 작성하는 변수명에 필수로 set 이라는 값이 들어가지 않아도 되지만
    // 어떠한 값을 변경한다 설정하기 떄문에
    // const [초기값변수, set초기값변수] 라는 이름을 작성해주는 것이 좋음
    const [abc, efg] = useState('Z');

    const 값변경 = () => {
        if(abc === 'Z') efg('X')
        else efg('Z');
    }
    //버튼을 클릭할 경우 z를 x로 변경하는 버튼 생성
    return (
        <>
            <h1>{abc}</h1>
            <button onClick={값변경}>값변경</button>
        </>
    )
}

export default 예제2번;