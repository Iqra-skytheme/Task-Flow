import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={styles.toast}>
      <div style={styles.content}>
        ✓ {message} is completed
      </div>
    </div>
  );
}

const styles = {
  toast: {
    position: "fixed",
    bottom: 30,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#00f5d4",
    color: "#0a0a15",
    padding: "16px 24px",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0, 245, 212, 0.3)",
    zIndex: 1000,
    animation: "slideIn 0.3s ease-out",
    fontWeight: 600,
    fontSize: 14,
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
};
