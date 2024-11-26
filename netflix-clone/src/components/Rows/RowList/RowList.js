import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
      />
      
      <Row
        title="Commedies"
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
            
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
};

export default RowList;