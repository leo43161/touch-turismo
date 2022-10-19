import { FaPlay, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="d-flex justify-content-between align-items-center py-4 px-5">
      <div className="col-4">
        <div className="d-flex justify-content-between col-5 mb-2">
          <div className="share-nav-button d-flex justify-content-center align-items-center">
            <FaPlay></FaPlay>
          </div>
          <div className="share-nav-button d-flex justify-content-center align-items-center">
            <FaFacebookF></FaFacebookF>
          </div>
          <div className="share-nav-button d-flex justify-content-center align-items-center">
            <FaTwitter></FaTwitter>
          </div>
          <div className="share-nav-button d-flex justify-content-center align-items-center">
            <FaInstagram></FaInstagram>
          </div>
        </div>
        <div>
          <span className="lato-regular h5 fw-bold secondary-text mb-0">/TucumanTurismo</span>
        </div>
        <div>
          <span className="sequel-hight h4">tucumanturismo</span><span className="lato-regular h4">.gob.ar</span>
        </div>
      </div>
      <div className="col-4">
        <img src="img/logoEATT.svg" className="col-12" alt="" />
      </div>
    </div>
  )
}
