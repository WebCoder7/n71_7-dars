import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "../api/axios";

const DataList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery("posts", () =>
    axios.get("/posts").then((res) => res.data)
  );

  const deleteMutation = useMutation((id) => axios.delete(`/posts/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DataList;
