import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

function RegisterSuccess() {
    const intervalRef = useRef(null);
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);
    useEffect(() => {
        if (count === 3) {
            intervalRef.current = setInterval(() => {
                setCount((preCount) => preCount - 1);
            }, 1000);
        } else if (count === 0) {
            clearInterval(intervalRef.current);
            navigate('/login')
        }
    },[count])

    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '90vh',
        flexDirection: "column"
    }}>
        会員登録完了！{count}秒後ログインページに戻ります。
        <div onClick={()=>navigate('/login')} style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline"
        }}>またはここにクリックして戻ります</div>
    </div>
}

export default RegisterSuccess