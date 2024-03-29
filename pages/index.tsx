import Seo from "@/components/Seo";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import { MouseEvent } from "react";
axios.defaults.baseURL = "http://localhost:3001";

export default function Home() {
  const router = useRouter();
  // const onClick = (id: String, title: String) => {
  //   router.push(`/movies/${title}/${id}`);
  // };
  const [results, setResults] = useState<[string, any][]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // const userData = data.payload;
        const movies: [string, any][] = Object.entries(data.payload);
        setResults(movies);
      } catch (error) {
        console.error("Error fetching data!:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div key={movie[0]}>
          {/* onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}

          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />*/}
          <h4>
            {/* <Link href={`/movies/${movie.original_title}/${movie.id}`}> */}
            <span>{movie[0]}</span>
            {/* </Link> */}
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }

///
// export default function Home() {
//   const [list, setList] = useState([]);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {
//     try {
//       const response = await axios.get("/member/");
//       setList(response.data);
//     } catch (error) {
//       alert("조회 에러");
//     }
//   };
//   const remove = async (id: number) => {
//     console.log(id);
//     try {
//       await axios.delete(`/member/${id}`);
//       load();
//     } catch (error) {
//       alert("삭제에러");
//     }
//   };

//   const add = async (member: { id: number; name: string; age: string }) => {
//     try {
//       await axios.post(`/member/`, member);
//       load();
//     } catch (error) {
//       alert("저장에러");
//     }
//   };

//   return (
//     <div>
//       <hr />
//       <h3>MemberList</h3>
//       <br />
//       {list &&
//         list.map((item: any) => (
//           <div key={item.id}>
//             <div>
//               <p>이름 : {item.name}</p>
//               <p>나이 : {item.age}</p>
//             </div>
//             <button onClick={() => remove(item.id)}>삭제하기</button>
//           </div>
//         ))}
//       <hr />
//       <br />

//       <h3> 멤버 추가하기 </h3>
//       <label> 이름 </label>
//       <input value={name} onChange={(event) => setName(event.target.value)} />
//       <label> 나이 </label>
//       <input value={age} onChange={(event) => setAge(event.target.value)} />
//       <button
//         onClick={() => {
//           add({ id: 0, name: name, age: age });
//           setName("");
//           setAge("");
//         }}
//       >
//         추가하기
//       </button>
//     </div>
//   );
// }
///

// export async function getServerSideProps() {
//   let data: { id: number; name: string; age: string }[] = [
//     { id: 0, name: "", age: "" },
//   ];

//   await axios
//     .get("/member")
//     .then(function (response) {
//       data = response.data;
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.log("fail");
//     });

//   return {
//     props: {
//       data,
//     },
//   };
// }

// type Member = {
//   id: number;
//   name: string;
//   age: string;
// };

// export default function Home({ data }: { data: Member[] }) {
//   return (
//     <div>
//       {data.map((item: any) => (
//         <div key={item.id}>
//           <div>
//             <p>이름 : {item.name}</p>
//             <p>나이 : {item.age}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
