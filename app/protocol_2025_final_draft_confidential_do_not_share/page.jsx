"use client";
import { useEffect, useRef, useState } from "react";

const target = {
  lat: 52.369598,
  lng: 4.848355,
};

export default function LeafletGame() {
  const mapRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isClient, setIsClient] = useState(false);

  const showToast = (message) => {
    setToastMsg(message);
    setTimeout(() => {
      setToastMsg("");
    }, 1000);
  };

  // Helper pour calculer la distance en mètres (Haversine)
  const getDistanceInMeters = (lat1, lng1, lat2, lng2) => {
    const R = 6371e3;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    const initMap = async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      const map = L.map(mapRef.current).setView([52.37, 4.89], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl:
          "https://www.cp-desk.com/wp-content/uploads/2019/02/map-marker-free-download-png.png",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      map.on("click", (e) => {
        const { lat, lng } = e.latlng;
        const distance = getDistanceInMeters(lat, lng, target.lat, target.lng);

        if (distance < 100) {
          L.marker([target.lat, target.lng], { icon: customIcon }).addTo(map);
          showToast(
            "🎯 Target acquired! The mission is a success, Agent Lovebird."
          );
          setIsModalOpen(true);
        } else if (distance < 250) {
          showToast("♨️ You're burning up! Almost too hot to handle...");
        } else if (distance < 500) {
          showToast("🔥 Hot! If you were any closer, we'd need sunscreen.");
        } else if (distance < 1000) {
          showToast("🌡️ Warm… Close enough to smell the picnic.");
        } else if (distance < 2000) {
          showToast(
            "🌆 You're in the right neighborhood. Suspiciously competent."
          );
        } else if (distance < 5000) {
          showToast("🔍 Right city. You're circling the target like a pro.");
        } else if (distance < 8000) {
          showToast("📍 Still Amsterdam, but let's not get cocky.");
        } else {
          showToast("❄️ Cold.");
        }
      });

      return () => {
        map.remove();
      };
    };

    initMap();
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="flex flex-col items-center p-6 relative">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-right ">
            Click anywhere on the map pls dev, <br /> zuckerberg can't see us
            here
          </h2>
          <img src="/zuck.webp" alt="" className="w-40 border-l-2" />
        </div>
        <div
          style={{
            height: "500px",
            width: "100%",
            maxWidth: "700px",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Chargement de la carte...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center  p-6 relative">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold text-right ">
          Click anywhere on the map pls dev, <br /> zuckerberg can't see us here
        </h2>
        <img src="/zuck.webp" alt="" className="w-40 border-l-2" />
      </div>

      {/* Toast unique */}
      {toastMsg && (
        <div className="toast toast-top toast-center z-50 fixed top-4">
          <div className="alert alert-info shadow-lg">
            <span>{toastMsg}</span>
          </div>
        </div>
      )}

      {/* Map */}
      <div
        ref={mapRef}
        style={{
          height: "500px",
          width: "100%",
          maxWidth: "700px",
          borderRadius: "10px",
        }}
      />

      {/* Modal DaisyUI */}
      {isModalOpen && (
        <>
          <input
            type="checkbox"
            id="rendezvous-modal"
            className="modal-toggle"
            checked
            readOnly
          />
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">🎯 Rendezvous Confirmed</h3>
              <p className="py-2">
                📍 <strong>Coordinates:</strong>
                <br />
                52.369598° N, 4.848355° E
              </p>
              <p className="py-2">
                🕰 <strong>Time:</strong>
                <br />
                Saturday at 11:47 AM
              </p>
              <p className="pt-2">
                ✅ Mission validated. You passed the initiative test.
              </p>
              <div className="modal-action">
                <button className="btn" onClick={() => setIsModalOpen(false)}>
                  Got it
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
