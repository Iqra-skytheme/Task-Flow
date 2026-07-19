export default function FloatingButton({ setAddingNew }) {
  return (
    <button style={styles.fab} onClick={() => setAddingNew(true)}>
      +
    </button>
  );
}

const styles = {
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: "50%",
    border: "none",
    background: "#00f5d4",
    fontSize: 28,
    cursor: "pointer",
  },
};