// Components
import { Button } from "@/components/ui/button";
// Icons
import { LuTrash2 } from "react-icons/lu";

export const ImagePreview = ({ handleDeleteImage, imagePreviewSrc }) => {
  if (!imagePreviewSrc) {
    return null;
  }

  return (
    <div className="rounded-md border border-input relative overflow-hidden">
      <div className="absolute top-2 right-2">
        <Button
          type="button"
          onClick={handleDeleteImage}
          variant="outline"
          size="icon"
        >
          <LuTrash2 className="h-6 w-6" />
        </Button>
      </div>
      <img
        src={imagePreviewSrc}
        alt="Previsualización de la imagen"
        className="max-h-48 w-full object-cover object-center"
      />
    </div>
  );
};

export default ImagePreview;
