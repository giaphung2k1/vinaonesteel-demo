# Vina One Steel - Modern Web Interface (JSW Steel Style)

Website giới thiệu và danh mục sản phẩm của **Công ty Cổ phần Sản xuất Thép Vina One** được thiết kế lại theo phong cách và bố cục công nghiệp hiện đại của tập đoàn **JSW Steel**.

## 🌟 Tính Năng & Điểm Nổi Bật

- **Song ngữ hoàn chỉnh (VI & EN):** Hỗ trợ đầy đủ 9 trang Tiếng Việt và 9 trang Tiếng Anh tương ứng với chuyển đổi ngôn ngữ 2 chiều tức thì.
- **Phong cách JSW Steel:** Giao diện công nghiệp nặng cao cấp, màu sắc chủ đạo Navy (`#0b1f3a`) & Xanh Vina One (`#065fb8`).
- **Fixed Header & Mega Menu:** Thanh điều hướng cố định khi cuộn trang kèm hiệu ứng đổ bóng mượt mà, Mega Menu hiển thị toàn bộ danh mục sản phẩm.
- **Self-Hosted Local Fonts 100%:** Nạp trực tiếp từ thư mục `fonts/` (`Oswald` cho tiêu đề, `Montserrat` cho nội dung), hỗ trợ đầy đủ tiếng Việt có dấu, 0ms delay, triệt tiêu hoàn toàn hiện tượng nhảy font (FOUT).
- **Tương thích toàn diện:** Thuần HTML5, Vanilla CSS3 và JavaScript hiện đại, không phụ thuộc thư viện nặng.

## 📁 Cấu Trúc Dự Án

```text
vinaonesteel-demo/
├── css/
│   ├── style.css         # Reset, biến CSS toàn cục, typography & layout chung
│   ├── components.css    # Header, Hero Slider, Tabs, Mega Menu, Cards, Footer
│   └── fonts.css         # Khai báo @font-face cho font nội bộ
├── js/
│   ├── scrollreveal.min.js# Thư viện cuộn mượt hiệu ứng ScrollReveal
│   └── main.js           # Slider tự động, Fixed Header, Counter số liệu, Tabs, Lightbox, ScrollReveal Config
├── fonts/                # Các file font .woff2 cục bộ (Oswald, Montserrat)
├── en/                   # Toàn bộ 9 trang phiên bản Tiếng Anh
│   ├── index.html
│   ├── about-us.html
│   ├── products.html
│   ├── pipes-purlins.html
│   ├── shapes-sections.html
│   ├── steel-coils.html
│   ├── news-events.html
│   ├── career.html
│   └── contact.html
├── index.html            # Trang chủ Tiếng Việt
├── ve-vinaone.html       # Về chúng tôi (Tổng quan, Lịch sử, Sơ đồ tổ chức, Công trình)
├── dong-san-pham.html    # Tổng quan sản phẩm & tải Catalogue PDF
├── thep-ong-xa-go.html   # Thép ống & Xà gồ (8 loại sản phẩm)
├── thep-hinh.html        # Thép hình U, I, V (tiêu chuẩn ASTM, JIS, TCVN)
├── thep-cuon.html        # Thép cuộn cán nguội, mạ kẽm, tôn mạ nhôm kẽm, tôn màu
├── tin-tuc-su-kien.html  # Tin tức, thông báo & bài viết chuyên ngành
├── tuyen-dung.html       # Tuyển dụng, chế độ đãi ngộ & nộp hồ sơ
└── lien-he.html          # Danh bạ kinh doanh (Mr. Quang, Ms. Tiên, Mr. Nicky) & Bản đồ
```

## 🚀 Hướng Dẫn Chạy Cục Bộ

1. Clone repository về máy:
   ```bash
   git clone https://github.com/giaphung2k1/vinaonesteel-demo.git
   ```
2. Mở file `index.html` trực tiếp trên trình duyệt hoặc đặt vào máy chủ web local (XAMPP `htdocs/vinaonesteel-demo`, Live Server, Nginx, Apache).
