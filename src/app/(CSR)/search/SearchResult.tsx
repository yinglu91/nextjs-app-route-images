import styles from "./SearchPage.module.css";
import Image from "next/image";
import { Spinner } from "@/components/bootstrap";
import { useSearchImages } from "@/hooks/useSearchImages";

type Props = {
  searchTerm: string;
};

// rafce <tab>
const SearchResult = ({searchTerm}: Props) => {
  const { data, isFetching, isError } = useSearchImages(searchTerm);

  return (
    <>
      <div>You are searching for: {searchTerm}</div>

      <div className="d-flex flex-column align-items-center">
        {isFetching && <Spinner animation="border" />}
        {isError && <p>Something went wrong. Please try again.</p>}
        {data?.length === 0 && <p>Nothing found. Try a different query!</p>}
      </div>

      {searchTerm && data && (
       <>
          {data.map((image) => (
            <Image
              src={image.urls.raw}
              width={250}
              height={250}
              alt={image.description}
              key={image.id}
              className={styles.image}
            />
          ))}
       </>
      )}
    </>
  );
};

export default SearchResult;
