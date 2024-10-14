const DEFAULT_SPACING_FACTOR = 8

export const styles = {
  toolbar: {
    backgroundColor: "header.main",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 7 * DEFAULT_SPACING_FACTOR,
    padding: "0px 16px !important",
  },
  container: {
    display: "flex",
    mr: "60px",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    width: 6 * DEFAULT_SPACING_FACTOR,
    cursor: "pointer",
  },
  logo: {
    width: 4 * DEFAULT_SPACING_FACTOR,
    height: 2 * DEFAULT_SPACING_FACTOR,
    cursor: "pointer",
    marginRight: 8,
    marginTop: 2,
  },
  typography: {
    color: "text.primary",
    fontWeight: "700",
  },
  settings: {
    marginLeft: 3,
    padding: "0.188rem",
    backgroundColor: "header.main",
    borderRadius: "50%",
    height: "1.875rem",
    width: "1.875rem",
    border: "2px solid",
    color: "primary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  personIcon: {
    height: "1,5rem",
    color: "primary",
  },
}
