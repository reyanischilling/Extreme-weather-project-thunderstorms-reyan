import CitationCard from '../CitationCard';

export default function CitationCardExample() {
  return (
    <div className="p-8 max-w-2xl space-y-4">
      <CitationCard
        number={1}
        title="Understanding Thunderstorms"
        author="National Weather Service"
        source="NOAA Weather Education"
        url="https://www.weather.gov"
      />
      <CitationCard
        number={2}
        title="Severe Weather Safety Guide"
        author="Environment Canada"
        source="Government of Canada Publications"
      />
    </div>
  );
}
