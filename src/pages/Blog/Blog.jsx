import Card from "../../components/Common/Card";
import { useBlog } from "../../context/BlogContext";

export default function Blog() {
  const { blogs } = useBlog();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
