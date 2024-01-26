import { notFound } from "next/navigation";

type Props = {
  params: { term: string };
};

const SearchPage = ({ params: { term } }: Props) => {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //* Api call to get search movies
  //* Api call to get popular movies
  return <div>Welcome to SearchPage {termToUse}</div>;
};

export default SearchPage;
