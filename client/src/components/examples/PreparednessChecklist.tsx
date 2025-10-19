import PreparednessChecklist from '../PreparednessChecklist';

export default function PreparednessChecklistExample() {
  const items = [
    { id: 'radio', label: 'Battery-powered weather radio' },
    { id: 'flashlight', label: 'Flashlights and extra batteries' },
    { id: 'water', label: 'Emergency water supply' },
    { id: 'firstaid', label: 'First aid kit' },
    { id: 'shelter', label: 'Identify safe shelter location' },
  ];

  return (
    <div className="p-8 max-w-md">
      <PreparednessChecklist title="Emergency Preparedness" items={items} />
    </div>
  );
}
