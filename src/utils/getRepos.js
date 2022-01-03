import axios from "axios";

export const getRepos = async () => {
  try {
    const res = await axios.get(
      "https://api.github.com/users/ashishpoudel995/repos"
    );
    const Projectlists = [];
    res.data.forEach((repo) => {
      if (repo.topics.includes("personal-project")) {
        Projectlists.push({
          Title: repo.name,
          Description: repo.description,
          Link: repo.html_url,
          Demo: repo.homepage,
          id: repo.id,
        });
      }
    });

    Projectlists.sort(function (a, b) {
      return b.id - a.id;
    });

    return Projectlists;
  } catch (err) {
    return [];
  }
};
