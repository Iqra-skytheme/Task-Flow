export default function EmptyState() {
  return (
    <div style={styles.empty}>
      <div style={{ fontSize: 40 }}>🌿</div>
      <p>No tasks found</p>
    </div>
  );
}

const styles = {
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#666",
  },
};