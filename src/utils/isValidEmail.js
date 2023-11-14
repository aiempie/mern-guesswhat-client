// Hàm kiểm tra email hợp lệ
const isValidEmail = (email) => {
  // Sử dụng biểu thức chính quy đơn giản để kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
export default isValidEmail;
