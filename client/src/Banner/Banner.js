import React from "react";
import "./banner.scss";
import {
  faEnvelope,
  faMobileAlt,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import IconHref from "../SharedComponents/IconHref/IconHref";
import proPic from "../ProPic.jpg";

const iconList = [
  {
    id: 1,
    text: "135 Quincy Ave, MA",
    icon: faAddressCard,
    url: "https://maps.google.com",
    showOnMobile: false,
  },
  {
    id: 2,
    text: "arjun.nair89@outlook.com",
    icon: faEnvelope,
    url: "mailto:arjun.nair89@outlook.com",
    showOnMobile: true,
  },
  {
    id: 3,
    text: "6692419274",
    icon: faMobileAlt,
    url: "tel:+1-669-241-9274",
    showOnMobile: true,
  },
];

const TopBanner = ({ isMobile }) => (
  <header className="jumbotron bg-light mb-5 d-flex justify-content-center justify-content-lg-between flex-column flex-lg-row mh-50">
    <div>
      <h1> Arjun Nair </h1>
      <address className="lead">
        <ul className="list-unstyled list-inline">
          {iconList.map((ic) => (
            <IconHref key={ic.id} {...ic} isMobile={isMobile} />
          ))}
        </ul>
      </address>
      <blockquote class="banner-quote text-xs-right">
        <p class="mb-0">Millions saw the apple fall, but Newton asked why.</p>
        <footer class="blockquote-footer ">Bernard Baruch</footer>
      </blockquote>
    </div>
    <div>
      <img src={proPic} class="rounded-circle h-25 mh-100" alt="profile" />
    </div>
  </header>
);

export default TopBanner;
