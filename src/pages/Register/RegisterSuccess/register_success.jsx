import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./register_success.css"

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

    return <div className="register-success-top">
        会員登録完了！{count}秒後ログインページに戻ります。
        <div
            className="register-success-back-btn"
            onClick={()=>navigate('/login')}
        >
            またはここにクリックして戻ります
        </div>
    </div>
}

export default RegisterSuccess