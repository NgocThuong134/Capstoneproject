import React, { useEffect, useState } from 'react';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import { addToWishlist, removeFromWishlist } from '../../../redux/actions/wishlist';

const ProductDetailsCard = ({ setOpen, data }) => {
    const { cart } = useSelector((state) => state.cart);
    const { wishlist } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (wishlist && wishlist.find((i) => i._id === data._id)) {
            setClick(true);
        } else {
            setClick(false);
        }
    }, [wishlist]);

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    const addToCartHandler = (id) => {
        const isItemExists = cart && cart.find((i) => i._id === id);

        if (isItemExists) {
            toast.error("Sản phẩm đã có trong giỏ hàng!");
        } else {
            if (data.stock < count) {
                toast.error("Số lượng sản phẩm có hạn!");
            } else {
                const cartData = { ...data, qty: count };
                dispatch(addTocart(cartData));
                toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
            }
        }
    };

    const removeFromWishlistHandler = (data) => {
        setClick(!click);
        dispatch(removeFromWishlist(data));
    };

    const addToWishlistHandler = (data) => {
        setClick(!click);
        dispatch(addToWishlist(data));
    };

    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    };

    return (
        <div className='bg-[#f9f9f9]'>
            {
                data ? (
                    <div className='fixed w-full h-screen top-0 left-0 bg-[#00000070] z-40 flex items-center justify-center'>
                        <div className='w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-lg shadow-lg p-6 relative'>
                            <RxCross1
                                size={30}
                                className="absolute right-5 top-5 z-50 cursor-pointer text-gray-700 hover:text-red-600 transition duration-150"
                                onClick={() => setOpen(false)}
                            />

                            <div className="flex flex-col 800px:flex-row">
                                <div className='w-full 800px:w-[50%] flex flex-col items-center'>
                                    <img src={`${backend_url}${data.images && data.images[0]}`} alt="Sản phẩm" className='rounded-lg shadow-md mb-4 object-cover w-full h-[300px] md:h-[400px]' />
                                    <div className='flex items-center'>
                                        <Link to={`/shop/preview/${data.shop._id}`} className="flex items-center">
                                            <img
                                                src={`${backend_url}${data?.shop?.avatar}`}
                                                alt=""
                                                className='w-[50px] h-[50px] rounded-full mr-2 border-2 border-gray-300'
                                            />
                                            <div>
                                                <h3 className={`${styles.shop_name} text-lg font-semibold`}>
                                                    {data.shop.name}
                                                </h3>
                                                <h5 className="pb-3 text-gray-500">
                                                    (4.5) Đánh giá
                                                </h5>
                                            </div>
                                        </Link>
                                    </div>
                                    <div
                                        className={`${styles.button} bg-[#007BFF] text-white rounded-md h-10 flex items-center justify-center mt-4 hover:bg-[#0056b3] transition duration-200`}
                                        onClick={() => toast.info("Chức năng này chưa khả dụng!")}
                                    >
                                        <span className="flex items-center">
                                            Gửi Tin Nhắn <AiOutlineMessage className="ml-1" />
                                        </span>
                                    </div>
                                    <h5 className="text-red-600 mt-5">({data.sold_out}) Đã bán</h5>
                                </div>
                                <div className='w-full 800px:w-[50%] pt-5 pl-5 pr-5'>
                                    <h1 className={`${styles.productTitle} text-2xl font-bold text-gray-800`}>
                                        {data.name}
                                    </h1>
                                    <p className="text-gray-700 mt-2">{data.description}</p>

                                    <div className='flex pt-3'>
                                        <h4 className={`${styles.productDiscountPrice} text-lg font-semibold text-green-600`}>
                                            {formatCurrency(data.discountPrice)}
                                        </h4>
                                        <h3 className={`${styles.price} text-lg text-gray-500 line-through ml-2`}>
                                            {data.originalPrice ? formatCurrency(data.originalPrice) : null}
                                        </h3>
                                    </div>

                                    <div className="flex items-center mt-6 justify-between pr-3">
                                    <div className="flex items-center">
                                        <button
                                        className="bg-teal-500 text-white font-bold rounded-l px-4 py-2 hover:bg-teal-600 transition duration-300"
                                        onClick={decrementCount}
                                        >
                                        -
                                        </button>
                                        <span className="bg-gray-100 text-gray-800 font-medium px-4 py-2">
                                        {count}
                                        </span>
                                        <button
                                        className="bg-teal-500 text-white font-bold rounded-r px-4 py-2 hover:bg-teal-600 transition duration-300"
                                        onClick={incrementCount}
                                        >
                                        +
                                        </button>
                                    </div>
                                        <div>
                                            {
                                                click ? (
                                                    <AiFillHeart
                                                        size={30}
                                                        className='cursor-pointer'
                                                        onClick={() => removeFromWishlistHandler(data)}
                                                        color="red"
                                                        title="Xóa khỏi danh sách yêu thích"
                                                    />
                                                ) : (
                                                    <AiOutlineHeart
                                                        size={30}
                                                        className="cursor-pointer"
                                                        onClick={() => addToWishlistHandler(data)}
                                                        title="Thêm vào danh sách yêu thích"
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-center">
                                        <button
                                            className={`flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-md h-12 px-6 shadow-lg hover:bg-yellow-600 transition duration-200`}
                                            onClick={() => addToCartHandler(data._id)}
                                        >
                                            <AiOutlineShoppingCart className="mr-2" />
                                            <span className="font-semibold text-lg">Thêm vào giỏ hàng</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default ProductDetailsCard;