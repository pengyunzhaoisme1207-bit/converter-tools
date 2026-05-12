interface AdSlotProps {
  slot: 'top' | 'middle' | 'result' | 'bottom' | 'sidebar' | 'inline';
  className?: string;
}

const minHeights: Record<AdSlotProps['slot'], string> = {
  top: 'min-h-[90px]',
  middle: 'min-h-[250px]',
  result: 'min-h-[250px]',
  bottom: 'min-h-[90px]',
  sidebar: 'min-h-[300px]',
  inline: 'min-h-[120px]',
};

export default function AdSlot({ slot, className = '' }: AdSlotProps) {
  return (
    <div
      className={`ad-slot-${slot} ${minHeights[slot]} ${className} bg-gray-50 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center my-8 text-gray-400 text-sm`}
      aria-label="Advertisement"
    >
      <span className="uppercase tracking-wide text-xs">Advertisement</span>
    </div>
  );
}
