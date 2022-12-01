import axios from "axios";

class BeerHandlers {
  url: string;
  page: string | undefined;

  constructor(dbURL: string, dbPORT: string, page?: string) {
    this.url = `${dbURL}:${dbPORT}`;
    this.page = page;
  }

  getBeer = async () => {
    console.log(this.page);
    return await axios.get(`${this.url}/beers?_page=${this.page}&_limit=10`);
  };

  postBeer = async (beerData: {
    name: string;
    genre: string;
    description: string;
    image_url: string;
  }) => {
    return await axios.post(`${this.url}/beers`, beerData);
  };
}

export default BeerHandlers;
