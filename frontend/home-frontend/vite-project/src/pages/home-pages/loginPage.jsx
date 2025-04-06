import React from 'react';
import Navbar from '../../components/navbar';
import LoginForm from '../../components/loginForm';
import RightImage from '../../components/rightImage';

function LoginPage() {
    
    return (
        <div className="h-screen flex flex-col bg-[#fffafb]">
            <Navbar />

            <div className="flex flex-grow">

                <LoginForm/>
                <RightImage/>

            </div>
        </div>
    );
}

export default LoginPage;
