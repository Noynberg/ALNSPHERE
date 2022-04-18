import React, { memo, useContext } from "react";
import "./Represents.css";
import { BsDiscord } from "react-icons/bs";
import { IKImage } from "imagekitio-react";
import DataContext from "context/DataContext";
const TriShapeButton = React.lazy(() =>
  import("components/Buttons/TriShapeButton/TriShapeButton")
);

function Represents() {
  const {setShowDiscordPopup} = useContext(DataContext);
  return (
    <div className="represents-wrapper ">
      <div className="container-wrapper">
        <div className="represents-section">
          <div className="represents-left">
            <p className="fs-46px weight-7 white mb-60px">
              AlnSphere represents an NFT collection of
              <br />
              <span className="pink">from the multiverse</span>
            </p>
            <p className="fs-18px white weight-7 lh-30px mb-20px">
              Since the Alns have been created on planet Spheron, the Spheroxy
              hasn’t been the same. AlnSphere is more than just your average
              Play-to-Earn game, it is a ticket to a seamless entry into
              blockchain gaming, NFTs, and much more!
            </p>

            <p className="fs-18px white weight-7 lh-30px mb-60px">
              Our collection of 9,999 NFTs comes with 6,666 2D NFTs and 3,333 3D NFTs which are either claimable for free or by burning $SROCKS.
            </p>

            <div className="represents-btns">
              <a href="https://discord.com/invite/alnsphere" target="_blank" rel="noreferrer">
              {/* <button onClick={() => setShowDiscordPopup(true)}> */}
                <TriShapeButton
                  title="Join Discord"
                  icon={
                    <span
                      className="white icon-button"
                      style={{ fontSize: "18px" }}
                    >
                      <BsDiscord />
                    </span>
                  }
                />
              {/* </button> */}
              </a>
              <a
                href={
                  "https://ik.imagekit.io/6pl7k4a01ha/Whitepaper_jLPK3sQMpHh.pdf?updatedAt=1639460659749"
                }
                target="_blank"
                rel="noreferrer"
              >
                <TriShapeButton
                  style={{ paddingTop: "19px", paddingBottom: "19px" }}
                  title="Whitepaper"
                  normal={true}
                />
              </a>
            </div>
          </div>
          <div className="represents-right">
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path="doctors-replacement_jIZFMaiLX.png"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img src={doctorsImg} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Represents);
