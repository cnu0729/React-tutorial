const 실습문제 = (props) => {
    const {num,name,age,gender,phone} = props;
    return(
        <div className="info-ex">
            num = {num}번 <br/>
            name = {name} <br/>
            age = {age} <br/>
            gender = {gender} <br/>
            phone = {phone}
        </div>
    )
}

export default 실습문제;