import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XuCX6afKhxItvIoEIM7ujKSxY938t3hDrOEBfIzz4nY",
  },
});
