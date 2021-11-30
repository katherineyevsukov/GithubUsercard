import axios from "axios";

const fetchGithubUsers = async (username) => {
  const promise = axios
    .all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/followers`),
    ])
    .then(
      axios.spread((...responses) => {
        const user = responses[0].data;
        const followers = responses[1].data;
        return [user, followers];
      })
    )
    .catch((err) => {
      console.log(err);
    });

  return promise;
};

export default fetchGithubUsers;
