import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50, // Avoid status bar overlap
  },
  searchGroup: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchControlGroup: {
    flex: 1,
    marginLeft: 10,
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: "600",
  },
  searchControl: {
    marginTop: 2,
    color: "#7e7e7e",
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 10,
    borderRadius: 20,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 20,
    justifyContent: "center",
  },
  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };