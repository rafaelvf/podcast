import React from "react";
import "../css/Principal.css";
import { FaSpotify, FaGoogle, FaApple } from "react-icons/fa";
import podcast from '../img/podcast.png'

function Principal() {
  return (
    <div className="principal">
      <div>
        <p className="principal_p">Trending Episode</p>
        <h1 className="principal_h1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h1>
        <p className="principal_p2">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor<br/>
            mauris  sit amet orci. Aenean dignissim pellentesque felis.
        </p>
        <p className="principal_p">Listen Also on</p>
        <ul className="principal_ul">
            <li>
            <FaSpotify />
            </li>
            <li>
            <FaGoogle />
            </li>
            <li>
            <FaApple />
            </li>
        </ul>
        </div>
        <div>
            <img src={podcast} alt='podacast' className="principal_img"/>
        </div>
    </div>
  );
}

export default Principal;
