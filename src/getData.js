import axios from "axios";

const url = "https://swapi.dev/api/people/2/";

// const config = {
//   headers: { blabla: "bla" },
//   transformResponse: (respose) => respose,
// };

export default async () => {
  const { data } = await axios.get(url);

  return data;
};
