import AxiosInstance from "../axios";

const postLogin = async (payload, onSuccess, onError) => {
  try {
    const response = await AxiosInstance.post(
      `https://dummyjson.com/auth/login`,
      payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
};

export { postLogin };
