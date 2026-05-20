import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

interface DemoModeBannerProps {
  message?: string;
  messageTa?: string;
  dismissible?: boolean;
}

/**
 * Amber warning banner shown on pages with simulated/demo data.
 * Required until real authentication and live data are integrated.
 */
export function DemoModeBanner({
  message = "Preview Mode — This dashboard shows demo data. Real data will be available after official launch.",
  messageTa = "முன்னோட்ட பயன்முறை — இந்த டாஷ்போர்டு மாதிரி தரவைக் காட்டுகிறது. அதிகாரப்பூர்வ வெளியீட்டிற்குப் பிறகு உண்மையான தரவு கிடைக்கும்.",
  dismissible = true,
}: DemoModeBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="status"
      aria-label="Demo mode notice"
      className="demo-banner animate-fade-in"
    >
      <AlertTriangle
        className="w-5 h-5 shrink-0 mt-0.5 text-amber-600"
        aria-hidden="true"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-amber-800">⚠️ Demo / Preview Mode</p>
        <p className="text-xs text-amber-700 mt-0.5 leading-relaxed font-tamil">{messageTa}</p>
        <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">{message}</p>
      </div>
      {dismissible && (
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss demo mode notice"
          className="shrink-0 p-1 rounded-lg hover:bg-amber-200/50 transition text-amber-600"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
