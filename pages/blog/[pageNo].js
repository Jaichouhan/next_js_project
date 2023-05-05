import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const paths =
    data &&
    data.products.map((result) => {
      return {
        params: { pageNo: result.id.toString() },
      };
    });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;

  return (
    <>
      <Navbar />
      <h1>Hello {pageNumber} done</h1>
      <div className="">
        <h1>{data.brand}</h1>
        <h2>{data.category}</h2>
        <h3>{data.description}</h3>
        <h4>{data.price}</h4>
        <h5>{data.title}</h5>
        <h6>{data.rating}</h6>
        <div style={{ marginTop: "30px" }}></div>
      </div>
    </>
  );
};

export default pageNo;
