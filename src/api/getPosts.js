import AxiosInstance from "../axios";

const getPosts = async (id, onSuccess, onError) => {
  try {
    const response = await AxiosInstance.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
  }
};

export { getPosts };
