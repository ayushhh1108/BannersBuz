import React from "react";
import "../../css/style.css";
const ProfileBox = () => {
  return (
    <div class="container d-flex">
      <div class="card-profile p-3">
        <div class="media flex-wrap w-100">
          <img src="https://imgur.com/ZnxJ2SY.png" class="mr-3" />
          <div class="media-body w-100 d-flex flex-wrap">
            <h4 class="mt-2 mb-1 w-fit-content ">
              Hey there, Marry Hanerry
            </h4>
            <span class="cursor-pointer f-size-14 w-10 mt-3 ml-3">Edit</span>
            <div class="d-flex flex-row align-text-center">
              <small class="text-muted cursor-pointer mr-3 f-size-12">
                marryhanerry1108@gmail.com | Log out
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
