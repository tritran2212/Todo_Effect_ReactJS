# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# life-circle 
mounting (sinh ra) lần đầu xuất hiện
updating (update) khi props hoặc state thay đổi
un-mounting - xóa khỏi giao diện
#  useEffect can thiệp vào  components  - chạy sau giao diện
callback
1 undefined - callback  duoc goi moi lan re-render
2 dependencies
3 [] -call chỉ chạy  một lần duy nhất  (mounting 50%)
use case: sử dụng  call api  khi mới vào trang web
sử dụng thêm sự kiện  cho đối tượng  document hoặc body 
4 



# Deploy lên server 
- build
- minify
- network
- đường đẫn
# Rounting 
 - SPA
 - HTML - MPA
 - react-router
 # bundle code 

  single page application
   1 trang web chỉ có 1 trang duy nhất
   sử dụng  js để  render  nhiều trang web khác nhau 
   - tránh reload trang web có thể 
   # BrowserRouter 
quản lí history của app

# Routes và Route
# element vs Component 
# a vs link   a reload trang , link k reload trang
#Outlet 
render router con  ben trong route cha
-nesting -lồng nhau

- link và navlink
  link không có trạng thái
  navlink  có trạng thái (thuận tiện hơn về việc design , component, className)

# useNavigate : muốn xử lí khi làm gì đó khi chuyển qua tap mới

Link và NavLink thì không
# nelify : dùng đưa code lên tên miền chia sẻ người khác dùng