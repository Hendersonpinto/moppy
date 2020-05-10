import overviewIcon from "../../../assets/images/lnavhome.svg";
import calendarIcon from "../../../assets/images/lnavcalendar.svg";
import historyIcon from "../../../assets/images/lnavhistory.svg";
import messagesIcon from "../../../assets/images/lnavchat.svg";
import shopIcon from "../../../assets/images/lnavshop.svg";
import profileIcon from "../../../assets/images/lnavprofile.svg";
import SvgHomeIcon from "./icons/SvgHomeIcon";
import SvgCalendarIcon from "./icons/SvgCalendarIcon";
import SvgHistoryIcon from "./icons/SvgHistoryIcon";
import SvgChatIcon from "./icons/SvgChatIcon";
import SvgShopIcon from "./icons/SvgShopIcon";
import SvgProfileIcon from "./icons/SvgProfileIcon";
import React from "react";

export const leftNavActions = (activeId) => {
  return [
    {
      title: "overview",
      url: "/hosts",
      icon:
        activeId === "overview" ? (
          <SvgHomeIcon fill="#235952" />
        ) : (
          <SvgHomeIcon fill="#FCD9D9" />
        ),
    },
    {
      title: "calendar",
      url: "/hosts/calendar",
      icon:
        activeId === "calendar" ? (
          <SvgCalendarIcon fill="#235952" />
        ) : (
          <SvgCalendarIcon fill="#FCD9D9" />
        ),
    },
    {
      title: "history",
      url: "/hosts/history",
      icon:
        activeId === "history" ? (
          <SvgHistoryIcon fill="#235952" />
        ) : (
          <SvgHistoryIcon fill="#FCD9D9" />
        ),
    },
    {
      title: "messages",
      url: "/hosts/messages",
      icon:
        activeId === "messages" ? (
          <SvgChatIcon fill="#235952" />
        ) : (
          <SvgChatIcon fill="#FCD9D9" />
        ),
    },
    {
      title: "shop",
      url: "/hosts/shop",
      icon:
        activeId === "shop" ? (
          <SvgShopIcon fill="#235952" />
        ) : (
          <SvgShopIcon fill="#FCD9D9" />
        ),
    },
    {
      title: "profile",
      url: "/hosts/profile",
      icon:
        activeId === "profile" ? (
          <SvgProfileIcon fill="#235952" />
        ) : (
          <SvgProfileIcon fill="#FCD9D9" />
        ),
    },
  ];
};
