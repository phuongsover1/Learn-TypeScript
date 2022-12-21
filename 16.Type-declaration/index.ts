import axios from "axios";
import _ from "lodash";

axios
  .get("https://jsonplaceholder.typicode.com/users/1", {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  })
  .then((res) => {
    console.log("WOO!!!");
    console.log(res.data);
  })
  .catch((err) => {
    console.log("ERROR!!!", err);
  });
// ("https://jsonplaceholder.typicode.com/users/1");
