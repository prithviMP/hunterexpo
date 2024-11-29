import { colors } from "./colors";
import { fonts } from "./fonts";

export const globalStyle = {
  dropdown: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    justifyContent: "center",
    backgroundColor: colors.whiteColor,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    cursor: "pointer",
  },
  dropdownText: {
    fontSize: 16,
    color: colors.cardHeadingTextCOlor,
    fontFamily: fonts.montserratRegular,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownList: {
    width: 400,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
};
