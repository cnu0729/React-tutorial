//node_module 폴더가 보이지 않을 경우 자동으로 import 완성이 안됨
import React from 'react';

function UseEffectEx(){
    <> {/* node_modules 관계없이 전체를 감싸주는 <></> 없으면 빨간 줄 */}
    return({/*
        <h1>useEffect 란?</h1>
        <pre>
            useEffect 함수는 컴포넌트(function, const 시작)가 렌더링(되게 하다 세워짐)될 때마다
            특정 작업을 실행할 수 있도록 하는 Hook

            리액트에서 컴포넌트를 렌더링하다 = 리액트에서 OO.js 코드실행 시작한다.

        </pre>

        [useEffect] 사용방법
        import {UseEffect} from 'react';
        useEffect( function,  deps )
                     ↓      ,   ↓ 
        useEffect(() => {}  ,   []); //function의 이름이나 특정 기능이 없을 때 익명함수로 표현

        function : OO.js 를 들어왔을 때 수행하고자 하는 작업
        deps     : 배열 형태로 배열 안에는 검사하고자 하는 특정 값, 빈배열 작성
                   deps에 특정값을 넣게되면 컴포넌트가 실행될 때나 지정한 값이 업데이트 될 때
                   useEffect에 적힌 function을 실행
                   deps를 작성하지 않고, function만 작성해서 사용하면 OO.js를 다시 시작할 때마다
                   useEffect에 작성된 function 함수가 호출
    */})
    </>
}

export default UseEffectEx;