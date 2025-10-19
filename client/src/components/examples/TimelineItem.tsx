import TimelineItem from '../TimelineItem';

export default function TimelineItemExample() {
  return (
    <div className="p-8 max-w-2xl">
      <TimelineItem
        year="2018"
        title="Severe Summer Storm"
        description="A powerful thunderstorm system moved through the region, producing baseball-sized hail and wind gusts exceeding 100 km/h. Multiple reports of property damage."
      />
      <TimelineItem
        year="2020"
        title="Flash Flooding Event"
        description="Slow-moving thunderstorm complex dropped 150mm of rain in 3 hours, causing widespread flooding in urban areas."
        isLast
      />
    </div>
  );
}
