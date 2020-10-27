import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import data from "../data";
import "./details.scss";
import BSContainer from "../SharedComponents/BSContainer";
import LeftBanner from "../LeftBanner/LeftBanner";
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    setTimeout(() => {
      this.setState({ isVisible: true });
    });
  }
  // get LI() {
  //   return posed.li({
  //     enter: { opacity: 1, transition: { duration: 200 } },
  //     exit: { opacity: 0 }
  //   });
  // }
  // get Container() {
  //   return posed.div();
  // }

  // get UL() {
  //   return posed.ul({
  //     enter: { staggerChildren: 50 }
  //   });
  // }
  render() {
    const {
      Container,
      LI,
      UL,
      state: { isVisible }
    } = this;
    return (
      <BSContainer className="bg-warning mt-3">
        <div className="row">
          <div className="col col-12 col-sm-2">
            <div className="rounded bg-success border-dark">
              <LeftBanner />
            </div>
          </div>
          <div className="col col-12 col-sm-10 bg-success border-dark rounded">
            <div className="bg-success"> this is the main content </div>
          </div>
        </div>
      </BSContainer>
      // <PoseGroup className="details">
      //   {isVisible && (
      //     <Container key="cont">
      //       <h3> {data.experience[0].client} </h3>
      //       <UL key="ul" className="responsibilites">
      //         {data.experience[0].responsibilities.map((l, i) => (
      //           <LI key={`resp ${i}`}>
      //             <FontAwesomeIcon
      //               icon={faTerminal}
      //               pull="left"
      //               transform="shrink-4"
      //             />{" "}
      //             {l}
      //           </LI>
      //         ))}
      //       </UL>
      //     </Container>
      //   )}
      // </PoseGroup>
    );
  }
}
