import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Xử lý logic đăng nhập ở đây
        console.log('Đăng nhập với username:', username, 'và password:', password);
    };
    return (
        <>
            <Nav />
                Login
            <Footer />
        </>
    )
}

export default LoginPage