import React from "react";
import PropTypes from "prop-types";
import HorizontalList from "../Components Library/HorizontalList/HorizontalList";
import FlexBox, {
  FlexBoxValueHelper
} from "../Components Library/Flexbox/FlexBox";
import IconHref from "../SharedComponents/IconHref/IconHref";
import ProfilePicture from "../ProfilePicutre/ProfilePicutre";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { urls } from "../utils/constants";
//Styles
import "./headerBanner.scss";

const HeaderBanner = ({ isMobile }) => {
  return (
    <FlexBox
      className="headerBanner"
      direction={FlexBoxValueHelper.DIRECTION_COLUMN}
    >
      <FlexBox
        className="headerBanner-details headerBanner-light"
        direction={FlexBoxValueHelper.DIRECTION_COLUMN}
      >
        <h1>Arjun Nair</h1>
        <div>
          <HorizontalList>
            <IconHref icon={faPaperPlane} url={urls.gmail} />
            <IconHref icon={faGithubSquare} url={urls.gitHub} />
            <IconHref icon={faLinkedin} url={urls.linkedIn} />
          </HorizontalList>
        </div>
      </FlexBox>
      <div className="headerBanner-dpConatiner">
        <ProfilePicture shift_left={80} shift_top={0} size={150} />
      </div>
    </FlexBox>
  );
};

HeaderBanner.propTypes = {
  isMobile: PropTypes.bool
};

HeaderBanner.defaultProps = {
  isMobile: false
};

export default HeaderBanner;