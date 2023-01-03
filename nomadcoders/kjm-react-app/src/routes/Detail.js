import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //ToDo : json 을 state 안에 넣어주고 return 에서 그려주기
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return <h1>Details</h1>;
};
export default Detail;
