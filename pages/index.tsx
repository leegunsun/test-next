import Seo from "@/components/Seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import { MouseEvent } from "react";

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
