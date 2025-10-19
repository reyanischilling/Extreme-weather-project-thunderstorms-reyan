import InfoCard from '../InfoCard';
import { Cloud } from 'lucide-react';

export default function InfoCardExample() {
  return (
    <div className="p-8 max-w-md">
      <InfoCard
        icon={Cloud}
        title="Cloud Formation"
        description="Thunderstorms form when warm, moist air rises rapidly into cooler air, creating towering cumulonimbus clouds."
      />
    </div>
  );
}
