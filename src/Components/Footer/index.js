import React from "react";
import { Typography, Link, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <IconButton>
                    <Link href="https://api.whatsapp.com/send?phone=0599332005" color="#fff">
                        <WhatsAppIcon />
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href="https://www.facebook.com/Golden.House.For.Training?refid=52&paipv=0&eav=Afb2k_N1fJmxU57VVqemABFjY8k7FlOBGXQKF4MV-3ypzC7BDd6K5wzIy3DmA8hH78s" color="#fff">
                        <FacebookIcon />
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href="https://www.instagram.com/golden_house_center/ " color="#fff">
                        <InstagramIcon />
                    </Link>
                </IconButton>
            </div>
            <Typography variant="body2" align="center" className="copyright">
                {new Date().getFullYear()} Golden House Training Center - Khan Yunis  &copy;
            </Typography>
        </footer>
    )
}

export default Footer;
