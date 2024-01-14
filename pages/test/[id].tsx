import { useRouter } from "next/router";

// export default function TestId() {
//   const router = useRouter();
//   const { id } = router.query;

//   console.log(id);

//   return (
//     <div>
//       <h1>ID: {id}</h1>
//     </div>
//   );
// }

export default function TestId({ id }: any) {
  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context: any) {
  // Extract id from the context params
  const { id } = context.params;

  console.log(id);
  // You can perform server-side operations here
  // For example, fetching data from an API based on the id

  // Return the id as props
  return { props: { id } };
}
