interface AdSlotProps {
  className: string;
}

export default function AdSlot({ className }: AdSlotProps) {
  return (
    <div
      className={`${className} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center min-h-[90px] my-6 text-gray-400 text-sm`}
    >
      Ad Space
    </div>
  );
}
