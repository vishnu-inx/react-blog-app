import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate("/");
        })
    };

    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-gray-700 text-white'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn;