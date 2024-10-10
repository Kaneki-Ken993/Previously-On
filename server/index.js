import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "16mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));

console.log("Server is running");

const routes = [
  { path: "/login", route: "./back/Login/login.js" },
  { path: "/series/discover", route: "./back/Series/Shows/discover.js" },

  // messages

  { path: "/messages/inbox", route: "./back/Messages/inbox" },
  { path: "/messages/discussion", route: "./back/Messages/discussion" },
  { path: "/messages/add", route: "./back/Messages/addMessage" },
  { path: "/messages/delete", route: "./back/Messages/deleteMessage" },
  { path: "/messages/read", route: "./back/Messages/readMessage" },
  
  // favorites
  
  { path: "/series/favorite", route: "./back/Series/favorite.js" },
  { path: "/favorites", route: "./back/Series/Favorites/favoritesAll.js" },
  { path: "/favorites/add", route: "./back/Series/Favorites/addtoFavorites.js" },
  {
    path: "/favorites/delete",
    route: "./back/Series/Favorites/deleteFromFavorites.js",
  },
  { path: "/friend", route: "./back/Social/addFriend.js" },
  { path: "/friend/list", route: "./back/Social/friendsList.js" },
  { path: "/friend/delete", route: "./back/Social/deleteFriend.js" },
  { path: "/friend/block", route: "./back/Social/blockFriend.js" },
  { path: "/friend/unblock", route: "./back/Social/unblockFriend.js" },
  { path: "/friend/blocked", route: "./back/Social/blockedList.js" },
  { path: "/friend/requests", route: "./back/Social/friendRequests.js" },
  
  // user
  
  { path: "/user", route: "./back/User/info.js" },
  
  // series
  
  {
    path: "/series/archive",
    route: "./back/Series/Shows/Archives/addToArchive.js",
  },
  {
    path: "/series/archive/delete",
    route: "./back/Series/Shows/Archives/deleteFromArchive.js",
  },
  { path: "/series/add", route: "./back/Series/Shows/CRUD/addToAccount" },
  {
    path: "/series/delete",
    route: "./back/Series/Shows/CRUD/deleteFromAccount",
  },
  { path: "/series/news", route: "./back/Series/Shows/news.js" },
  { path: "/series/search", route: "./back/Series/Shows/search.js" },
  { path: "/series/infos", route: "./back/Series/seriesDetail.js" },
  { path: "/series/episodes", route: "./back/Series/episodeList.js" },
  {
    path: "/series/episodes/finish",
    route: "./back/Series/addEpisodeToFinish.js",
  },
  {
    path: "/series/episodes/unfinish",
    route: "./back/Series/deleteEpisodeToFinish.js",
  },
  {
    path: "/series/season/finish",
    route: "./back/Series/addSeasonToFinish.js",
  },
  {
    path: "/series/season/unfinish",
    route: "./back/Series/deleteSeasonToFinish.js",
  },
];

routes.forEach(({ path, route: Route }) => {
  app.use(path, async (req, res, next) => {
    try {
      const route = await import(Route);
      if (typeof route.default === "function") {
        route.default(req, res, next);
      } else {
        res.status(500).send("Route module does not export a default function, this is index.js");
      }
    } catch (error) {
      console.error(`Error loading route ${path}:`, error);
      res.status(500).send("Internal Server Error in node index.js");
    }
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {});
