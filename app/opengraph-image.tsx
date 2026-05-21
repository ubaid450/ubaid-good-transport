import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} logistics and truck dispatch`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#082f51",
          color: "white",
          padding: 72,
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 76, height: 76, borderRadius: 10, background: "#ffffff", color: "#0a4f88", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 30 }}>
              UGT
            </div>
            <div style={{ fontSize: 30, fontWeight: 800 }}>{siteConfig.name}</div>
          </div>
          <div>
            <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 900, letterSpacing: 0, maxWidth: 920 }}>
              Premium Transport & Logistics Pakistan
            </div>
            <div style={{ marginTop: 28, fontSize: 28, color: "#dff1ff" }}>
              Cargo, loading, house shifting, and truck dispatch.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
