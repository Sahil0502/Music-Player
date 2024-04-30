import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Context";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Tum Hi Ho.mp3"),
    img: "https://m.media-amazon.com/images/M/MV5BOWQyMDU4OTctNDIxNC00NzFkLTk4MDEtOWQyY2EyNTJhOWI2XkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_QL75_UY190_CR74,0,190,190_.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Mehrama",
    artist: "Darshan Raval",
    mp3: new Audio("/assets/mp3/Mehrama Love Aaj Kal 128 Kbps.mp3"),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2pUel_lYg98RLGbtcdsIl_nQcGVUCrdexQ&s",
  },
  {
    id: Math.random() * Date.now(),
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Ae Dil Hai Mushkil.mp3"),
    img: "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Pehle Bhi Main",
    artist: "Vishal Mishra",
    mp3: new Audio("/assets/mp3/Pehle Bhi Main(PagalWorld.com.sb).mp3"),
    img: "https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20231124191036-500x500.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Tera Zikr",
    artist: "Darshan Raval",
    mp3: new Audio("/assets/mp3/new_192_Tera Zikr - Darshan Raval.mp3"),
    img: "https://c.saavncdn.com/820/Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Judaiyaan",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Judaiyaan.mp3"),
    img: "/assets/Arijit-4.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Heeriye",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Heeriye.mp3"),
    img: "https://c.saavncdn.com/022/Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Tu hi Hai Aashiqui",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Tu Hi Hai Aashiqui.mp3"),
    img: "/assets/Arijit-2.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Hawa Bake",
    artist: "Darshan Raval",
    mp3: new Audio("/assets/mp3/Hawa Banke Darshan Raval 128 Kbps.mp3"),
    img: "https://c.saavncdn.com/751/Hawa-Banke-Single-Punjabi-2019-20190710170223-500x500.jpg",
  },
  
];

export const songss = [
  {
    id: Math.random() * Date.now(),
    title: "Unstoppable",
    artist: "Sia",
    mp3: new Audio("/assets/mp3/Unstoppable(PagalWorld).mp3"),
    img: "https://i.scdn.co/image/ab67616d0000b27349e0134c686547c28b7c999f",
  },
  {
    id: Math.random() * Date.now(),
    title: "Believer",
    artist: "Imagin Dragons",
    mp3: new Audio("/assets/mp3/Believer(PagalWorld).mp3"),
    img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Hymn For The Weekend",
    artist: "Coldplay",
    mp3: new Audio("/assets/mp3/Hymn-For-The-Weekend(PaglaSongs).mp3"),
    img: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
  },
  {
    id: Math.random() * Date.now(),
    title: "Way Down We Go",
    artist: "Kaleo",
    mp3: new Audio("/assets/mp3/Way-Down-We-Go(PaglaSongs).mp3"),
    img: "https://upload.wikimedia.org/wikipedia/en/a/a1/KaleoWayDownWeGo.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Astronaut In The Ocean",
    artist: "Masked Wolf",
    mp3: new Audio("/assets/mp3/Astronaut-In-The-Ocean(PaglaSongs).mp3"),
    img: "https://images.genius.com/b9e54f62c0c3e29149300bf5ad472479.300x300x1.png",
  },
  {
    id: Math.random() * Date.now(),
    title: "Enemy",
    artist: "Tomee Profitt",
    mp3: new Audio("/assets/mp3/I See Who You Are You Are My Enemy-(PagalSongs.Com.IN).mp3"),
    img: "https://i.scdn.co/image/ab67616d00001e020051aa2d8acb5dfd82486247",
  },
  {
    id: Math.random() * Date.now(),
    title: "On My Way",
    artist: "Alan Walker",
    mp3: new Audio("/assets/mp3/On My Way-(PagalSongs.Com.IN).mp3"),
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Alan_Walker_-_On_My_Way.png/220px-Alan_Walker_-_On_My_Way.png",
  },
  {
    id: Math.random() * Date.now(),
    title: "Ignite",
    artist: "Alan Walker",
    mp3: new Audio("/assets/mp3/Ignite---Alan-Walker(PagalNew.Com.Se).mp3"),
    img: "https://c.saavncdn.com/014/Ignite-English-2018-20180615143214-500x500.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Not Afraid",
    artist: "Eminem",
    mp3: new Audio("/assets/mp3/Eminem - Not Afraid_j5-yKhDd64s.mp3"),
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Eminem_-_Not_Afraid.jpg/220px-Eminem_-_Not_Afraid.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Bring Me To Life",
    artist: "Evanescence",
    mp3: new Audio("/assets/mp3/Evanescence---Bring-Me-To-Life(musicdownload.cc).mp3"),
    img: "https://i.scdn.co/image/ab67616d0000b27325f49ab23f0ec6332efef432",
  },
];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
      <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Motivation
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songss.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Romantic
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
