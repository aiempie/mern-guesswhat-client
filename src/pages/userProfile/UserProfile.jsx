import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileService } from "~/services/authService";
import "./UserProfile.scss";
import { randomColor } from "~/layouts/header/Header";
import { Avatar, Button, Card, Container, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import GameInfo from "~/components/game-info/GameInfo";
import listGame from "~/config/ListGame";

function UserProfile() {
  const { id } = useParams();

  const user = useSelector((state) => {
    return state.user;
  });

  const [userProfile, setUserProfile] = useState();
  const [aovProfile, setAovProfile] = useState();

  const bgColor = useRef(randomColor());
  useEffect(() => {
    const fetchData = async (userId) => {
      const res = await getProfileService(userId);
      if (res.data.success) {
        setUserProfile(res.data.user);
        setAovProfile(res.data.aovScore);
      }
    };
    if (id) {
      fetchData(id);
    } else {
      fetchData(user.userInfo._id);
    }
  }, [id, user.userInfo]);

  return (
    <Container>
      <Card
        className="card_profile relative"
        raised
        sx={{ overflow: "unset", borderRadius: "1rem" }}
      >
        <div className="px-6">
          <div className="flex justify-center card_profile_head">
            <div className="card_profile_image">
              <div className="avatar">
                <Avatar
                  className="avatar_image"
                  src={userProfile?.image}
                  sx={{ bgcolor: bgColor.current, width: 180, height: 180 }}
                >
                  {userProfile?.fullname.split(" ").pop()}
                </Avatar>
              </div>
            </div>
            <div className="action">
              <div className="card_profile_action ">
                {user?.userInfo._id === userProfile?._id ? (
                  <Button
                    className="float-right"
                    variant="contained"
                    color="success"
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="star">
              <div className="card_profile_star flex justify-center">
                <div>
                  <span className="heading">{userProfile?.playTime || 0}</span>
                  <span className="description">Đã chơi</span>
                </div>
                {user?.userInfo._id === userProfile?._id ? (
                  <div>
                    <span className="heading">{userProfile.playCount}</span>
                    <span className="description">Còn lại</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Typography variant="h4">{userProfile?.fullname}</Typography>
          </div>
          <div className="border-t border-gray-300 pb-4">
            <GameInfo
              gameName={listGame.find((item) => item.id === "lq").name}
              score={aovProfile?.score}
            />
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default UserProfile;
