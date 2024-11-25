import AxiosInstance from "../axios";

const getUserData = async (accessToken, onSuccess, onError) => {
  try {
    const res = await AxiosInstance.get(`https://dummyjson.com/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    onSuccess && onSuccess(res.data);
  } catch (error) {
    onError && onError(error);
  }
};

export { getUserData };
