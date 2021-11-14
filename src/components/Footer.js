import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon 
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>City Utrecht</p>
                        </div>
                        <div className="d-flex">
                            <a href="06656561">+316594821321</a>
                        </div>
                        <div className="d-flex">
                            <p>triostan@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" >Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                                <br />
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://www.google.com"}>
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton
                            url={"https://www.google.com"}>
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <RedditShareButton
                            url={"https://www.google.com"}>
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>

                            <LinkedinShareButton
                            url={"https://www.google.com"}>
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
