import AxiosInstance from "../axios";

const postPost = async (payload, onSuccess, onError) => {
  try {
    const response = await AxiosInstance.post(
      `https://jsonplaceholder.typicode.com/posts`,
      payload
    );
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
};

export { postPost };
