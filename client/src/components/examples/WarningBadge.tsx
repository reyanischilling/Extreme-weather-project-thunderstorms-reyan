import WarningBadge from '../WarningBadge';

export default function WarningBadgeExample() {
  return (
    <div className="p-8 flex flex-wrap gap-3">
      <WarningBadge
        type="watch"
        label="Thunderstorm Watch"
        description="Conditions are favorable for thunderstorm development. Stay alert."
      />
      <WarningBadge
        type="warning"
        label="Severe Thunderstorm Warning"
        description="A severe thunderstorm has been detected. Take shelter immediately."
      />
      <WarningBadge
        type="severe"
        label="Tornado Warning"
        description="A tornado has been sighted or indicated by radar. Seek shelter NOW!"
      />
    </div>
  );
}
