import AxiosInstance from "../axios";

const getComments = async (id, onSuccess, onError) => {
  try {
    const userPost = await AxiosInstance.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const comments = await AxiosInstance.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    onSuccess && onSuccess({ post: userPost.data, comments: comments.data });
  } catch (error) {
    onError && onError(error);
  }
};

export { getComments };
