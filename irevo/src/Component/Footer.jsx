import React from "react";
import "./Footer.css";
import discordIcon from './Socials/discord.svg';
import facebookIcon from './Socials/facebook.svg';
import instagramIcon from './Socials/instagram.svg';
import telegramIcon from './Socials/telegram.svg';
import twitterIcon from './Socials/twitter.svg';

const Socials = [
  { id: 1, url: "https://example.com", iconUrl: discordIcon, title: "Discord" },
  { id: 2, url: "https://example.com", iconUrl: facebookIcon, title: "Facebook" },
  { id: 3, url: "https://example.com", iconUrl: instagramIcon, title: "Instagram" },
  { id: 4, url: "https://example.com", iconUrl: telegramIcon, title: "Telegram" },
  { id: 5, url: "https://example.com", iconUrl: twitterIcon, title: "Twitter" },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="caption text-n-4 lg:block">
        *T&C Apply | © {new Date().getFullYear()} Tarnea Technology Solutions Private Limited - All rights reserved.
      </p>

      <ul className="flex gap-5 flex-wrap">
        {Socials.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
