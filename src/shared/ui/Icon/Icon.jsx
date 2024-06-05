import { cloneElement } from "react";
import { ReactComponent as CryptoIcon } from "./lib/CryptoIcon.svg";
import { ReactComponent as GamesIcon } from "./lib/GamesIcon.svg";
import { ReactComponent as HomeIcon } from "./lib/HomeIcon.svg";
import { ReactComponent as InstagramIcon } from "./lib/InstagramIcon.svg";
import { ReactComponent as LanguageIcon } from "./lib/LanguageIcon.svg";
import { ReactComponent as MailIcon } from "./lib/MailIcon.svg";
import { ReactComponent as MenuIcon } from "./lib/MenuIcon.svg";
import { ReactComponent as ReferalIcon } from "./lib/ReferalIcon.svg";
import { ReactComponent as SignInIcon } from "./lib/SignInIcon.svg";
import { ReactComponent as SignOutIcon } from "./lib/SignOutIcon.svg";
import { ReactComponent as TelegramIcon } from "./lib/TelegramIcon.svg";
import { ReactComponent as WhatsAppIcon } from "./lib/WhatsAppIcon.svg";
import { ReactComponent as ArrowDownIcon } from "./lib/ArrowDownIcon.svg";
import { ReactComponent as CrosshairIcon } from "./lib/CrosshairIcon.svg";
import { ReactComponent as CopyIcon } from "./lib/CopyIcon.svg";

const ICON_MAP = {
  Crypto: <CryptoIcon />,
  Games: <GamesIcon />,
  Home: <HomeIcon />,
  Instagram: <InstagramIcon/>,
  Language: <LanguageIcon />,
  Mail: <MailIcon />,
  Menu: <MenuIcon />,
  Referal: <ReferalIcon />,
  SignIn: <SignInIcon />,
  SignOut: <SignOutIcon />,
  Telegram: <TelegramIcon />,
  WhatsApp: <WhatsAppIcon />,
  ArrowDown: <ArrowDownIcon />,
  Crosshair:<CrosshairIcon />,
  CopyIcon: <CopyIcon />
};

const Icon = ({ iconType, className }) => {
  const newIcon = cloneElement(ICON_MAP[iconType], { className });
  return newIcon;
};

export default Icon;
