import React from "react";
import { codingProfiles } from "../constants";

const ProfileLinks = () => {
  return (
    <div className="flex gap-8 mt-6 mb-14">
      {codingProfiles.map((profile) => (
        <a
          key={profile.id}
          href={profile.link}
          target="_blank"
          rel="noreferrer"
          className="tooltip text-white text-[32px] hover:text-teal-300 transition"
        >
          {React.createElement(profile.icon)}

          {/* Tooltip text */}
          <span className="tooltiptext capitalize">
            {profile.id}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ProfileLinks;