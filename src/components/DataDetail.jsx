import { useQuery } from "react-query";
import axios from "../api/axios";

const DataDetail = ({ id }) => {
  const { data, error, isLoading } = useQuery(["dataDetail", id], () =>
    axios.get(`/posts/${id}`).then((res) => res.data)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data Detail</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default DataDetail;
