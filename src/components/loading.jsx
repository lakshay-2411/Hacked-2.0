import { useEffect } from "react";

export default function Loading() {
  return (
    <div id="loading-overlay">
      <video src="/images/hacked-loading.mp4" autoPlay loop />
    </div>
  );
}
