import { useState } from "react";
import "./listItem.scss";

function ListItem({index}) {

const [isHovered, setIsHovered] = useState(false);
const trailer = "https://www.youtube.com/embed/mO0OuR26IZM?si=ROZOOMN_YSXzrRWl&autoplay=1&mute=1&loop=1&controls=0";

  return (
    <div className="listItem"
      style={{left: isHovered && index * 225 -50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
      <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUxf8Oi6b-AfMTchGw1zexfCRExKjd14PmkhCXIovRIpH70VwEz4VkhB58vU0BcoJhZhzfYtNhlYVIsB50UyowN9BDl_0XCIOTsaoXLS3ORN1g8mR0cqo99LDjNB_WZQX8zI.jpg?r=a98" alt="" />

      {isHovered && (
        <>
        <iframe src={trailer}></iframe>

      <div className="itemInfo">
        <div className="icons">
        <i className="material-icons icon">play_arrow</i>
      <span className="material-icons icon" >add</span>
      <i className="material-icons icon" >thumb_up</i>
      <i className="material-icons icon" >thumb_down</i>
        </div>

      <div className="itemInfoTop">
        <span>1 hour 14 mins</span>
        <span className="limit">+16</span>
        <span>1999</span>

      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusamus ab aliquid cupiditate unde voluptatem beatae minus nisi assumenda libero.
      </div>
      <div className="genre">Action</div>

      </div>
      </>
    )}
    </div>
  );
}

export default ListItem;
