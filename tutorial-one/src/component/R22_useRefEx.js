import React, {useRef, useEffect} from 'react';

//name password 작성하는 form
//useRef 이용해서 password 제일 먼저 입력하도록 focus 설정
//만약에 export default 를 컴포넌트에 한 번에 작성하길 원한다면
/*
const 로 컴포넌트가 시작하는 경우
export const 컴포넌트명 = () => {
    }
function으로 컴포넌트가 시작하는 경우
export default fuction 컴포넌트명 {

}
*/
export const RefEx = () => {
    const pwRef = useRef(null);

    useEffect(() => {
        if(pwRef.current){
            pwRef.current.focus();
        }
    }, []);

    return (
        <>
        <form method="post">
            <label>NAME : </label>
            <input type="text" />
            <label>PASSWORD : </label>
            <input type="password" 
                   ref={pwRef} //useRef 설정한 이름
                   placeholder="비밀번호를 입력하세요." />
            <button>로그인</button>
        </form>
        </>
    )
}

//export default RefEx;