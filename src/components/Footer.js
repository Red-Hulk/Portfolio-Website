import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon, 
    EmailIcon,
    EmailShareButton
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Utrecht</p>
                        </div>
                        <div className="d-flex">
                            <p>tristanemilmeijer@hotmail.com</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">

                            <LinkedinShareButton
                            url={"https://www.google.com"}>
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>

                            <EmailShareButton
                            url={"https://www.google.com"}>
                                <EmailIcon className="mx-3" size={36}/>
                            </EmailShareButton>
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
