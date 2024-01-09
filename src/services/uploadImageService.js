import axios from "axios";
const clientId = "59a814bcf35c4ea";

export const uploadImage = async (imageData) => {
  try {
    const formData = new FormData();
    formData.append("image", imageData.split(",")[1]); // Bỏ phần header của Base64

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.imgur.com/3/image",
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
      data: formData,
    };

    const response = await axios(config);

    if (response.data.success) {
      return response.data.data.link;
    } else {
      throw new Error("Upload to Imgur failed");
    }
  } catch (error) {
    console.error(error);
  }
};
