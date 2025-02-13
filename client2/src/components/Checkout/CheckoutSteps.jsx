import React from 'react';
import styles from '../../styles/styles';

const CheckoutSteps = ({ active }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap">
                
                {/* Bước 1: Vận chuyển */}
                <div className={`${styles.noramlFlex} items-center`}>
                    <div className={`${styles.cart_button} ${active >= 1 ? 'bg-[#f63b60] text-white' : 'bg-[#FDE1E6] text-[#f63b60]'}`}>
                        <span className={`${styles.cart_button_text}`}>1. Vận chuyển</span>
                    </div>
                    <div className={`${active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] bg-[#f63b60]" : "w-[30px] 800px:w-[70px] h-[4px] bg-[#FDE1E6]"}`} />
                </div>

                {/* Bước 2: Thanh toán */}
                <div className={`${styles.noramlFlex} items-center`}>
                    <div className={`${active >= 2 ? styles.cart_button : `${styles.cart_button} bg-[#FDE1E6] text-[#f63b60]`}`}>
                        <span className={`${active >= 2 ? styles.cart_button_text : `${styles.cart_button_text} text-[#f63b60]`}`}>
                            2. Thanh toán
                        </span>
                    </div>
                    <div className={`${active > 2 ? "w-[30px] 800px:w-[70px] h-[4px] bg-[#f63b60]" : "w-[30px] 800px:w-[70px] h-[4px] bg-[#FDE1E6]"}`} />
                </div>

                {/* Bước 3: Thành công */}
                <div className={`${styles.noramlFlex} items-center`}>
                    <div className={`${active >= 3 ? styles.cart_button : `${styles.cart_button} bg-[#FDE1E6] text-[#f63b60]`}`}>
                        <span className={`${active >= 3 ? styles.cart_button_text : `${styles.cart_button_text} text-[#f63b60]`}`}>
                            3. Thành công
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSteps;