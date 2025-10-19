import Navigation from '../Navigation';

export default function NavigationExample() {
  const sections = [
    { id: 'formation', label: 'Formation' },
    { id: 'conditions', label: 'Conditions' },
    { id: 'dangers', label: 'Dangers' },
    { id: 'warnings', label: 'Warnings' },
    { id: 'preparedness', label: 'Preparedness' },
    { id: 'damage', label: 'Damage' },
    { id: 'history', label: 'History' },
    { id: 'sources', label: 'Sources' },
  ];

  return (
    <Navigation
      sections={sections}
      onNavigate={(id) => console.log('Navigate to:', id)}
    />
  );
}
