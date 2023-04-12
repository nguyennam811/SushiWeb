import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Promo</h1>
            <p className="lead mb-4">
              🎁 KHUẤY ĐỘNG MÙA HÈ CÙNG MINIGAME 
              🎁 “ĐOÁN TÊN MÓN MỚI - RINH
              VOUCHER HỜI” 🎉 Tokyo Deli mang đến cho tất cả các thực khách một
              chương trình #MINIGAME đố vui hoành tráng với VOUCHER CỰC CHẤT!
              Menu mới với hai nguyên liệu quen thuộc là CÁ HỒI và LƯƠN nằm nhóm
              thực phẩm giàu chất dinh dưỡng tốt cho sức khỏe. Hai nguyên liệu
              tươi sống được chế biến tỉ mỉ kết hợp cùng phô mai tan chảy tạo
              nên tổng thể món ăn có hương vị mới lạ mà ngon miệng. Đặc biệt,
              Tokyo Deli đang có chương trình khuyến mãi #GIẢM_20% cho các món
              nằm trong MENU MỚI. Hãy cùng tham gia MINIGAME đố vui có thưởng,
              săn ngay một em VOUCHER 200K để trải nghiệm những món ăn siêu
              ngon, siêu hấp dẫn tại Tokyo Deli thôi nào!!! 🔥️
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">
              Liên hệ
            </NavLink>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/Promo/promo.jpg"
              alt="Promo"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
