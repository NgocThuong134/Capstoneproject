import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxAvatar } from 'react-icons/rx';

const ShopCreate = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [avatar, setAvatar] = useState();
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const newForm = new FormData();
        newForm.append("file", avatar);
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("password", password);
        newForm.append("zipCode", zipCode);
        newForm.append("address", address);
        newForm.append("phoneNumber", phoneNumber);

        axios
            .post(`${server}/shop/create-shop`, newForm, config)
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setPassword("");
                setAvatar();
                setZipCode("");
                setAddress("");
                setPhoneNumber("");
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });

        navigate("/shop-login");
        window.location.reload();
    };

    // Xử lý thay đổi tệp
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h4 className="mt-6 text-center text-3xl font-bold text-gray-900">
                    Đăng ký với tư cách người bán
                </h4>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        {/* Tên cửa hàng */}
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
                                Tên cửa hàng
                            </label>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        {/* Số điện thoại */}
                        <div>
                            <label htmlFor="phone-number" className='block text-sm font-medium text-gray-700'>
                                Số điện thoại
                            </label>
                            <div className='mt-1'>
                                <input
                                    type="tel"
                                    name='phone-number'
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Địa chỉ Email
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Địa chỉ */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Địa chỉ
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="address"
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Mã bưu điện */}
                        <div>
                            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                                Mã bưu điện
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="zipcode"
                                    required
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Mật khẩu */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mật khẩu
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Tải lên ảnh đại diện */}
                        <div>
                            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700"></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {avatar ? (
                                        <img
                                            src={URL.createObjectURL(avatar)}
                                            alt="avatar"
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <RxAvatar className="h-8 w-8" />
                                    )}
                                </span>
                                <label
                                    htmlFor="file-input"
                                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <span>Tải lên ảnh</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        onChange={handleFileInputChange}
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                            >
                                Gửi
                            </button>
                        </div>

                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4>Đã có tài khoản?</h4>
                            <Link to="/shop-login" className="text-blue-600 pl-2">
                                Đăng nhập
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ShopCreate;