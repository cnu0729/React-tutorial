import React, {useState} from 'react';
import axios from 'axios';

const Axios_Ex2 = () => {
    const [data, setData] = useState(null);

    const 불러오기 = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.data);
        })
        .catch( ()=>{
            alert("데이터를 불러오지 못했습니다.");
        });
    }

    return(
        <>
            <h1>버튼 누르면 해당하는 데이터 모두 가져오기</h1>
            <button onClick={불러오기}>불러오기</button>
            <br />
            {data && <textarea rows={20} cols={80} value={JSON.stringify(data, null, 4)} readOnly={true} />}
        </>
    )
}

export default Axios_Ex2;

/*
const Axios_Ex2 = () => {
    const [data, setData] = useState(null); 
    
    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            //무사히 잘 가져왔다면 then으로 data 값 변경6+
            .then(res => {
                setData(res.data);
            })
            //가져오는데 실패했다면 에러 보여주기
            .catch( () => {
                alert("데이터를 가져오는데 실패했습니다.");
            });
    },[] );

    return (
        <>
            <h1> json안에 작성된 내용 가져오기</h1>
            <ul>
            {comments.map(comment => (
                <li key={}>
                    <strong>UserID : </strong>{} <br/>
                    <strong>ID : </strong>{} <br/>
                    <strong>Title : </strong>{} <br/>
                    <strong>Completed : </strong>{ ? 'Yes'  : 'No'} <br/>

                </li>
            ))}
            </ul>
        </>
    )
} 
export default Axios_Ex2;

------------------------------------------------------------------------

const Axios_Ex2 = () => {
    const [comments, setComments] = useState(null); 
    
    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            //무사히 잘 가져왔다면 then으로 data 값 변경6+
            .then(res => {
                setData(res.comments);
            })
            //가져오는데 실패했다면 에러 보여주기
            .catch( () => {
                alert("데이터를 가져오는데 실패했습니다.");
            });
    },[] );

    return (
        <>
            <h1> json안에 작성된 내용 가져오기</h1>
            <ul>
            {comments.map(comment => (
                <li key={ comment.id }>
                    <strong>UserID : </strong>{ comment.id } <br/>
                    <strong>Name : </strong>{ comment.name } <br/>
                    <strong>Email : </strong>{ comment.email } <br/>
                    <strong>Body : </strong>{ comment.body } <br/>

                </li>
            ))}
            </ul>
        </>
    )
} 
export default Axios_Ex2;
*/