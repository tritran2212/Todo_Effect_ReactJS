
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


 
# MUỐN CHUYỂN TRANG 
 ---> useNavigate : muốn xử lí khi làm gì đó khi chuyển qua tap mới

--->Link và NavLink thì không click sẽ tự động chuyển trang không check điều kiện 
- navlink  có trạng thái (thuận tiện hơn về  việc design , component, className)
  redirect 

# nelify : dùng đưa code lên tên miền chia sẻ người khác dùng

# protected Route (Private Route)
 - không muốn api , ai cũng  có quyền vào   những route này, mà phải 
  

  query string
 
# Cài thư viện Formik  
#  npm install formik --save  
# validation  npm i yup


 # HOOK  đặt đầu trang component, 
===> useLocation() : trả về đối tượng URL hiện tại, gồm đường dẫn (pathname), tham số truy vấn (search) , trạng thái  (state) nếu có
 
===> useState() : quản lí trạng thái 
 const  [state, setState] = useState(initialValue)

 [name]= error (Computed Property Name : dùng giá trị biến,  làm key (tên thuộc tính object))  => Công dụng thêm cập nhật lỗi trường có tên [name]


===>  tạo File dist : npm run build


Route React

build command : npm i, npm run dev
publish directory : dist

#install  react-router
 npm install react-router

 # formik + yup
# Schema  trả vể promise 
- validate dữ liệu form
- validate dữ liệu api  trả về coi thử đúng format chưa
- validate dữ liệu khi  truyền vào props của component 

npm trends


# global state
chỉ có 1 state duy nhất cho toàn bộ app hay là component
- theme
- user login
-xử lí 1 số logic ....

# local state