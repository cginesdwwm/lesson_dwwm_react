import { useParams } from "react-router-dom";
import { useBlog } from "../../../context/BlogContext";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  //   console.log(id);
  const { blogs } = useBlog();
  //   console.log(blogs);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const detailDuBlog = blogs.find((e) => e._id === id);
    setDetails(detailDuBlog);
  }, [id, blogs]);

  if (!details) {
    return <p>Chargement...</p>; // on peut mettre un spinner là
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">{details.titre}</h3>
      <p className="italic m-4">{details.texte}</p>
      <div className="flex justify-center">
        <div className="w-[350px] h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={details.image}
            alt={details.titre}
          />
        </div>
      </div>
    </div>
  );
}
