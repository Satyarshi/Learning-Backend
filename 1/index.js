const express = require("express");
require("dotenv").config();

const app = express();

// 20240611204516
// https://api.github.com/users/satyarshi

const data = {
  login: "Satyarshi",
  id: 123971579,
  node_id: "U_kgDOB2On-w",
  avatar_url: "https://avatars.githubusercontent.com/u/123971579?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Satyarshi",
  html_url: "https://github.com/Satyarshi",
  followers_url: "https://api.github.com/users/Satyarshi/followers",
  following_url:
    "https://api.github.com/users/Satyarshi/following{/other_user}",
  gists_url: "https://api.github.com/users/Satyarshi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Satyarshi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Satyarshi/subscriptions",
  organizations_url: "https://api.github.com/users/Satyarshi/orgs",
  repos_url: "https://api.github.com/users/Satyarshi/repos",
  events_url: "https://api.github.com/users/Satyarshi/events{/privacy}",
  received_events_url: "https://api.github.com/users/Satyarshi/received_events",
  type: "User",
  site_admin: false,
  name: "SATYARSHI SHUKLA",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 3,
  created_at: "2023-01-30T15:37:44Z",
  updated_at: "2024-04-24T13:10:23Z",
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/myname", (req, res) => {
  res.send("<h1>Satyarshi Shukla</h1>");
});

app.get("/github", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

// " api.github.com/users/satyarshi " to access the github api
