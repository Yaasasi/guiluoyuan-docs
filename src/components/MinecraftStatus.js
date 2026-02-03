// components/MinecraftStatus.js
import { useEffect, useState } from "react";

const REFRESH_MS = 30_000; // 30 秒刷新一次

export default function MinecraftStatus({ server = "hypixel.net" }) {
  const [state, setState] = useState({
    loading: true,
    online: false,
    players: null,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    let timer = null;

    const fetchStatus = async () => {
      try {
        const url =
          "https://uapis.cn/api/v1/game/minecraft/serverstatus?server=" +
          encodeURIComponent(server);

        const r = await fetch(url, { headers: { accept: "application/json" } });
        const j = await r.json();
        if (cancelled) return;

        const obj = j?.data ?? j;

        setState({
          loading: false,
          online: !!obj.online,
          players: typeof obj.players === "number" ? obj.players : null,
          error: null,
        });
      } catch (e) {
        if (!cancelled) {
          setState({
            loading: false,
            online: false,
            players: null,
            error: e?.message || "Fetch failed",
          });
        }
      }
    };

    // 首次立即请求
    fetchStatus();

    // 定时刷新
    timer = setInterval(fetchStatus, REFRESH_MS);

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
    };
  }, [server]);

  const badgeText = state.loading
    ? "Loading"
    : state.error
    ? "Error"
    : state.online
    ? "Online"
    : "Offline";

  const badgeBg = state.error ? "#fff2f0" : state.online ? "#f6ffed" : "#fff2f0";
  const badgeBd = state.error ? "#ffccc7" : state.online ? "#b7eb8f" : "#ffccc7";
  const badgeFg = state.error ? "#a8071a" : state.online ? "#237804" : "#a8071a";

  return (
    <div
      style={{
        display: "inline-flex",
        gap: 10,
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: 999,
        padding: "10px 14px",
        fontFamily: "ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto",
      }}
      title={state.error || ""}
    >
      <span
        style={{
          padding: "2px 10px",
          borderRadius: 999,
          border: "1px solid",
          fontWeight: 700,
          background: badgeBg,
          borderColor: badgeBd,
          color: badgeFg,
        }}
      >
        {badgeText}
      </span>

      <span style={{ opacity: 0.7 }}>{server}</span>

      <span style={{ fontWeight: 800 }}>Players:</span>
      <span>{state.loading || state.error ? "—" : state.players}</span>
    </div>
  );
}