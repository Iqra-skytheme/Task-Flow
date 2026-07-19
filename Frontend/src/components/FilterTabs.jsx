const tabs = ["all", "active", "done"];

export default function FilterTabs({ filter, setFilter }) {
  return (
    <div style={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          style={{
            ...styles.tab,
            ...(filter === tab ? styles.active : {}),
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

const styles = {
  tabs: {
    display: "flex",
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: "8px",
    borderRadius: 10,
    border: "1px solid #333",
    background: "transparent",
    color: "#999",
    cursor: "pointer",
  },
  active: {
    background: "#00f5d4",
    color: "#000",
  },
};