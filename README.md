# Dự Án Node.js và React với Tailwind

Chào mừng bạn đến với dự án này! Dự án bao gồm một ứng dụng client được xây dựng bằng React và Tailwind CSS, cùng với hai server sử dụng Node.js.

---
## Cấu Trúc Thư Mục

- `client2/`: Thư mục chứa ứng dụng client.
- `SERVER2/`: Thư mục chứa server chính.
- `SOCKET/`: Thư mục chứa server socket.

---
## Yêu Cầu Hệ Thống

- Node.js >= 14.x
- Yarn

---
## Hướng Dẫn Cài Đặt

### 1. Cài Đặt Client

1. Chuyển đến thư mục `client2`:
   ```bash
   cd client2
   ```
2. Cài đặt các phụ thuộc:
   ```bash
   yarn install
   ```
3. Chạy ứng dụng:
   ```bash
   yarn start
   ```

### 2. Cài Đặt Server

#### 2.1. Server Chính (SERVER2)

1. Chuyển đến thư mục `SERVER2`:
   ```bash
   cd SERVER2
   ```
2. Tạo một file `.env` dựa trên file mẫu (nếu có) và điền thông tin cần thiết.
3. Cài đặt các phụ thuộc:
   ```bash
   npm install
   ```
4. Chạy server:
   ```bash
   npm start
   ```

#### 2.2. Server Socket (SOCKET)

1. Chuyển đến thư mục `SOCKET`:
   ```bash
   cd SOCKET
   ```
2. Cài đặt các phụ thuộc:
   ```bash
   npm install
   ```
3. Chạy server socket:
   ```bash
   npm start
   ```

---
## Môi Trường

Tạo file `.env` trong thư mục `SERVER2` và thêm các biến môi trường cần thiết:

```
PORT=5000
DATABASE_URL=mongodb://localhost:27017/mydb
SECRET_KEY=mysecretkey
```

---
## Thư Mục Không Cần Đưa Lên Git

Để tránh đẩy các thư mục không cần thiết lên GitHub, hãy đảm bảo rằng bạn đã thêm các thư mục sau vào file `.gitignore`:

```
SERVER2/.env
SERVER2/uploads
client2/node_modules
SERVER2/node_modules
SOCKET/node_modules
```

---
## Liên Hệ & Đóng Góp

Nếu bạn gặp vấn đề hoặc có ý tưởng cải tiến, hãy mở một issue trên repository hoặc liên hệ với nhóm phát triển.

---
## Kết Luận

Chúc bạn thành công trong việc cài đặt và chạy dự án! Nếu có bất kỳ vấn đề nào, hãy mở một issue trên repository này.
