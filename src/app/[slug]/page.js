import Image from "next/image";
import getCategoryColor from "@/helpers/get-category-color";
import styles from "./style.module.scss";

const BlogDetails = (props) => {
  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col_9">
          <div className={`h6 mb-20 ${getCategoryColor("Product Views")}`}>
            Product Views
          </div>
          <h2>Class aptent taciti sociosqu</h2>
        </div>
      </div>

      <Image
        className={`${styles.featuredImage} mb-50`}
        src=""
        alt="Featured Image"
        width="1280"
        height="387"
      />

      <div className="row mb-50">
        <div className="col col_9">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          obcaecati modi repudiandae illo quas quam laboriosam, maiores autem
          inventore. Impedit, maiores aliquid aut eum illum dolorum. Alias natus
          vel suscipit.
        </div>
      </div>
    </div>
  );
};
export default BlogDetails;
