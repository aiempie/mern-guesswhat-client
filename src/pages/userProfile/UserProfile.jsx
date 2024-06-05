import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar, Button, Card, Container, Typography, styled } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { getProfileService, updateAvatarService } from "~/services/authService";
import { uploadImage } from "~/services/uploadImageService";
import GameInfo from "~/components/game-info/GameInfo";
import Loading from "~/components/loading/Loading";
import listGame from "~/config/ListGame";
import { randomColor } from "~/layouts/header/Header";
import "./UserProfile.scss";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UserProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [userProfile, setUserProfile] = useState();
  const [aovProfile, setAovProfile] = useState();
  const [lolProfile, setLolProfile] = useState();
  const [loading, setLoading] = useState(true);

  const bgColor = useRef(randomColor());

  useEffect(() => {
    const fetchData = async (userId) => {
      setLoading(true);
      const res = await getProfileService(userId);
      if (res.data.success) {
        setUserProfile(res.data.user);
        setAovProfile(res.data.aovScore);
        setLolProfile(res.data.lolScore);
        setLoading(false);
      }
    };

    fetchData(id || user.userInfo._id);
  }, [id, user]);

  const handleAddAvatar = async (event) => {
    const { name, files } = event.target;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const userConfirmed = window.confirm("Bạn có chắc chắn muốn thay đổi Avatar không?");
        if (userConfirmed) {
          saveImageAvatar(reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const saveImageAvatar = async (image) => {
    setLoading(true);
    const res = await uploadImage(image);
    if (res) {
      updateAvatarService(dispatch, res);
    }
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
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
              {user?.userInfo._id === userProfile?._id && (
                <Button
                  className="float-right"
                  component="label"
                  variant="contained"
                  color="success"
                  startIcon={<CameraAltIcon />}
                >
                  Avatar
                  <VisuallyHiddenInput
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleAddAvatar}
                  />
                </Button>
              )}
            </div>
            <div className="star">
              <div className="card_profile_star flex justify-center">
                <div>
                  <span className="heading">{userProfile?.playTime || 0}</span>
                  <span className="description">Đã chơi</span>
                </div>
                {user?.userInfo._id === userProfile?._id && (
                  <div>
                    <span className="heading">{userProfile.playCount}</span>
                    <span className="description">Còn lại</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="text-center profile_name">
            <Typography variant="h4">{userProfile?.fullname}</Typography>
          </div>
          {aovProfile && (
            <div className="border-t border-gray-300 pb-4">
              <GameInfo
                game={listGame.find((item) => item.id === "lq")}
                score={aovProfile?.score}
                textColor="#d9be61"
              />
            </div>
          )}
          {lolProfile && (
            <div className="border-t border-gray-300 pb-4">
              <GameInfo
                game={listGame.find((item) => item.id === "lm")}
                score={lolProfile?.score}
                textColor="#9320e5"
              />
            </div>
          )}
        </div>
      </Card>
    </Container>
  );
}

export default UserProfile;
