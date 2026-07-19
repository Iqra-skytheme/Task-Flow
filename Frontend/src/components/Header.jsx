export default function Header({ todos, completionPct }) {
  return (
    <div style={styles.header}>
      <div>
        <div style={styles.title}>Iqra's Tasks</div>
        <div style={styles.subtitle}>
          {todos.filter((t) => !t.completed).length} remaining · {completionPct}% done
        </div>
      </div>

      <div>
        <svg width="52" height="52" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r="22" fill="none" stroke="#1e1e2e" strokeWidth="4" />
          <circle
            cx="26"
            cy="26"
            r="22"
            fill="none"
            stroke="#00f5d4"
            strokeWidth="4"
            strokeDasharray={`${2 * Math.PI * 22}`}
            strokeDashoffset={`${2 * Math.PI * 22 * (1 - completionPct / 100)}`}
            strokeLinecap="round"
            transform="rotate(-90 26 26)"
          />
        </svg>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: 800,
    color: "#fff",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
  },
};