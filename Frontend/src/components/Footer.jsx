export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.copyright}>
        © 2026 All Rights Reserved @Iqra
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    marginTop: 48,
    paddingTop: 24,
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  copyright: {
    fontSize: 12,
    color: "#666",
    fontWeight: 500,
  },
};
