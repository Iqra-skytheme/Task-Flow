export default function SearchBar({ search, setSearch }) {
  return (
    <div style={styles.searchWrap}>
      <input
        style={styles.input}
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button style={styles.clearBtn} onClick={() => setSearch("")}>
          ✕
        </button>
      )}
    </div>
  );
}

const styles = {
  searchWrap: {
    display: "flex",
    alignItems: "center",
    background: "#13131f",
    borderRadius: 14,
    padding: "10px 14px",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
  },
  clearBtn: {
    background: "none",
    border: "none",
    color: "#888",
    cursor: "pointer",
  },
};