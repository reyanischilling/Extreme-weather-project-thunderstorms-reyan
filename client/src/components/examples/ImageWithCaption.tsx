import ImageWithCaption from '../ImageWithCaption';
import cloudImage from '@assets/stock_images/cumulonimbus_cloud_f_b259ccca.jpg';

export default function ImageWithCaptionExample() {
  return (
    <div className="p-8 max-w-md">
      <ImageWithCaption
        src={cloudImage}
        alt="Cumulonimbus cloud formation"
        caption="Towering cumulonimbus cloud developing into a thunderstorm"
      />
    </div>
  );
}
