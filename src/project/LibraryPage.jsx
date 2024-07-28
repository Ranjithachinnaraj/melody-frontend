import '../styles/Style.css';
 

function LibraryPage() {
    return (
        <>
            <div className="bg">
                <div className="home-header">
                    <div className="home-top">
                        <img
                            src="https://i.pinimg.com/originals/6b/ab/ee/6babeeeeadb5ccf27187166cfd250e78.jpg"
                            alt="icon"
                            className="home-icon"
                        />
                        <p className="text-home">Your Library</p>
                    </div>
                    <br />
                    <button className="home-btn">Playlist</button>
                    <button className="home-btn">Artist</button>
                </div>
                <div className="home-songlist">
                    {/* <div class="home-song"> */}
                    <div>
                        <div className="song-img">
                            <img
                                src="https://a10.gaanacdn.com/gn_img/albums/6Zxb2r7b9w/Zxb2EV0JW9/size_m_1548564493.webp"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">kannamma unna</div>
                            <div>Ispade Rajavum Idhaya Raniyum(Anirudh Ravichander)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKjGCKzWQC3cOXLccIL6UKbPhJJBQqKhdGjgQ6djUGw&s"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">Unkaigal Korthu</div>
                            <div>Vanakkam Chennai(Anirudh Ravichander, Vishal Dadlani)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDkcywGNJD4IXMhZQJHegLCAsBtCX4eo_g-oA4SiKSw&s"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">Don'u Don'u Don'u </div>
                            <div>Maari( Alisha Thomas and Anirudh Ravichander)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src=" https://pbs.twimg.com/media/FiAn4J_UcAA2f34.jpg"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">Kokkarakko</div>
                            <div>Ghilli(Udit Narayan, Sujatha)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src="https://i.ytimg.com/vi/O4OqlkXC4PQ/maxresdefault.jpg"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">Sirukki Vaasam</div>
                            <div> Kodi(Anand Aravindakshan,Santhosh Narayanan,Shweta Mohan)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5nHOrV1NPCUap3seKwl_N1MypaSvV21sly47W14RJQ&s"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">Maruvaarthai</div>
                            <div>Enai Noki Paayum Thota (Sid Sriram)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1c4UuvWWs1H0Lp1xB4Gi0YorIbPU4xbibTvwk6CPFQ&s"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name"> Thaarame Thaarame</div>
                            <div> Kadaram Kondan(Sid Sriram)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKT_DPBqEmYWPixKWN63bTkctq-Fy48oblt4E0WLkFcA&s"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">Kandaangi Kandaangi</div>
                            <div>Jilla( Shreya Ghoshal and Vijay) </div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img
                                src="https://i.ytimg.com/vi/v_uZjRVQXPU/maxresdefault.jpg"
                                width="70px"
                            />
                        </div>
                        <div className="song-name">
                            <div className="s-name">Adiyae Kolluthey</div>
                            <div>Vaaranam Aayiram(Krish, Benny Dayal, Shruti Haasan)</div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img src="" width="70px" />
                        </div>
                        <div className="song-name">
                            <div className="s-name"> </div>
                            <div> </div>
                        </div>
                    </div>
                    <div>
                        <div className="song-img">
                            <img src="" width="70px" />
                        </div>
                        <div className="song-name">
                            <div className="s-name"> </div>
                            <div> </div>
                        </div>
                    </div>
                </div>
              
            </div>

        </>
    );
}

export default LibraryPage;