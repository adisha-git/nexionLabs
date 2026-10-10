import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = "NexIon Labs: high-performance websites built by senior developers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori renders each blob as its own layer; it doesn't support stacked
// radial gradients or clip-path, so the angled edge is a rotated panel.
const blobs: { color: string; left: number; top: number; size: number }[] = [
  { color: "255,203,87", left: -260, top: 60, size: 760 },
  { color: "144,224,255", left: -200, top: 300, size: 640 },
  { color: "255,51,61", left: 300, top: -360, size: 760 },
  { color: "169,96,238", left: 520, top: -160, size: 720 },
  { color: "99,91,255", left: 820, top: -320, size: 760 },
];

// Read at module scope so the image is generated once at build time.
const fontsDir = join(process.cwd(), "assets/fonts");
const [extraBold, medium] = await Promise.all([
  readFile(join(fontsDir, "Inter-800.ttf")),
  readFile(join(fontsDir, "Inter-500.ttf")),
]);

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(115deg, #FFB36B 0%, #EF5AC3 38%, #A960EE 62%, #7A73FF 100%)",
        fontFamily: "Inter",
      }}
    >
      {blobs.map((b) => (
        <div
          key={b.color}
          style={{
            position: "absolute",
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${b.color},1) 0%, rgba(${b.color},0) 65%)`,
          }}
        />
      ))}

      {/* Angled lower panel (Stripe-style skewed edge) */}
      <div
        style={{
          position: "absolute",
          left: -100,
          top: 470,
          width: 1500,
          height: 500,
          background: "#F8F8F9",
          transform: "rotate(-9deg)",
          transformOrigin: "0 0",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#111439",
              color: "white",
              fontSize: 32,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            N
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, color: "#111439" }}>{site.name}</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 800,
            color: "#111439",
            lineHeight: 1.04,
            letterSpacing: -2.5,
            maxWidth: 940,
            marginTop: -40,
          }}
        >
          High-performance websites, built by senior developers.
        </div>

        <div style={{ display: "flex", fontSize: 30, fontWeight: 500, color: "#3D4166" }}>
          Australia based · Free consultation · Pay on completion
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: extraBold, weight: 800, style: "normal" },
        { name: "Inter", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
