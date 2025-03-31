import React, {useState, useEffect} from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";

export default function Sidebar(){
    const [image, setImage] = useState(
        
        "https://i.pinimg.com/736x/a5/7b/f5/a57bf56fd526bde935fcb4d3de950423.jpg"
    );
    useEffect(() => {
        apiClient.get("me")
            .then(response => {
                const imageUrl = response.data.images?.[0]?.url || 
                    "https://i.pinimg.com/736x/a5/7b/f5/a57bf56fd526bde935fcb4d3de950423.jpg"; // Fallback image
                setImage(imageUrl);
            })
            .catch(error => {
                console.error("Error fetching profile image:", error);
                setImage("https://i.pinimg.com/736x/a5/7b/f5/a57bf56fd526bde935fcb4d3de950423.jpg"); // Fallback on error
            });
    }, []);
    
    // useEffect(() => {
    //     apiClient.get("me").then(response => { setImage(response.data.images[0].url);

    //     });
    // },[]);
    return <div className="sidebar-container">
        <img src={image}
        className="profile-image" 
        alt="profile" 
        />
        <div>
            <SidebarButton title="Scanner" to="/scanner" icon={ <MdSpaceDashboard />}/>
            <SidebarButton title="Trending" to="/trending" icon={< FaGripfire />}/>
            <SidebarButton title="Player" to="/player" icon={< FaPlay />}/>
            <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
            <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
    </div>;
}