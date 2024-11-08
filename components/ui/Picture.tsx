import React from "react";

interface ImageBuffer {
  imageData: number[];
  width: string;
  height: string;
}

const ProfilePicture: React.FC<ImageBuffer> = ({
  imageData,
  width,
  height,
}) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (imageData) {
      const uint8Array = new Uint8Array(imageData);
      const blob = new Blob([uint8Array]); // Adjust the mime type if needed
      const url = URL.createObjectURL(blob);
      setImageSrc(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [imageData]);

  return (
    <div>
      <div className="avatar">
        <div
          className={`rounded-lg ${height} ${width}`}
        >
          <img src={imageSrc as string} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
