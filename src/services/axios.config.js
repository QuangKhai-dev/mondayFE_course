import axios from 'axios';
export const https = axios.create({
  baseURL: 'https://shop.cyberlearn.vn',
});

https.interceptors.request.use(
  (config) => {
    // đây sẽ là nơi giúp chỉnh sửa thêm hoặc đổi dữ liệu trước khi gửi lên BE
    // config.headers = {
    //   Authorization: 'Bearer' + 'huhu12sasd',
    // };
    // return config;
    return {
      ...config,
      headers: {
        Authorization: 'Bearer' + 'huhu12sasd',
      },
    };
  },
  (error) => {
    // Khi có lỗi sẽ vào đây
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response) => {
    // console.log(response);
    const { data } = response;
    return data;
  },
  (error) => {
    // Khi có lỗi sẽ vào đây
    return Promise.reject(error);
  }
);
