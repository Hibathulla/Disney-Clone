type Props = {
  params: {
    id: number;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      Welcome to the Genre with ID: {id} and Name: {genre}
    </div>
  );
}

export default GenrePage;
