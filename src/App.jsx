import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Profile from './Components/User/Profile';
import { Grid2 } from '@mui/material';
import Acceuil from './Components/Series/Accueil';
import NavScreen from './Components/Navbar/NavScreen';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import EpisodeList from './Components/users/EpisodeList';
import SeriesLists from './Components/users/SeriesLists';
import FavoritesGrid from './Components/Series/Favorites/FavoritesGrid';
import FriendPage from './Components/Social/Friends/FriendPage';

const App = () => {
  return (
    <Router>
      <div>
        <Grid2 container justifyContent="space-evenly">
          <Grid2 lg={12} md={12} sm={12} xs={12}>
            <NavScreen />
          </Grid2>
          <Grid2 lg={12} md={12} sm={12} xs={12}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/series" element={<SeriesLists />}/>
                <Route path="/accueil" element={<Acceuil/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/news" element={<News />} />
                <Route path="/series/:id" element={<EpisodeList />} />
                <Route path="/favoris" element={<FavoritesGrid />} />
                <Route path="/amis" element={<FriendPage />} />
{/*                 
                <Route path="/profile/:id" element={<FriendProfile />} />
                <Route path="/messagerie" element={<Inbox />} />
                <Route path="/discussion/:id" element={<Discussion />} />
                <Route path="/message" element={<PostMessage />} /> */}
              </Routes>
          </Grid2>
          <Grid2 lg={12} md={12} sm={12} xs={12}>
            <Footer />
          </Grid2>
        </Grid2>
      </div>
    </Router>
  );
};

export default App;
