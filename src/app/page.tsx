import MoviesCarousel from "@/components/MoviesCarousel";
import { getMoviesByCategory } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getMoviesByCategory("upcoming");
  const topRatedMovies = await getMoviesByCategory("top_rated");
  const popularMovies = await getMoviesByCategory("popular");

  return (
    <main className="">
      {/* <h1>lets build disney</h1> */}
      {/* High level carousel */}

      <div className="flex flex-col space-y-2 xl:mt-40">
        <MoviesCarousel
          movies={upcomingMovies}
          isVertical={false}
          title="Upcoming"
        />
        <MoviesCarousel
          movies={topRatedMovies}
          isVertical={false}
          title="Top Rated"
        />
        <MoviesCarousel
          movies={popularMovies}
          isVertical={false}
          title="Popular"
        />
        {/* movie carousel */}
        {/* movie carousel */}
      </div>
    </main>
  );
}
