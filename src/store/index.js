import {configureStore} from '@reduxjs/toolkit';
// b1 khởi tạo  1 lần duy nhất
export const store = configureStore({
    reducer: {
        countReducer: (state = { count: 1 }) => {
            return state;
        }
    }
});

// 1 làm sao để lấy dữ liệu  từ redux use