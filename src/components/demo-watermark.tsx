export function DemoWatermark() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-500/10 dark:text-gray-400/10 rotate-[-45deg] select-none whitespace-nowrap">
        DEMO WEBSITE
      </div>
    </div>
  );
}
