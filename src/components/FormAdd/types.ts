export const colourStyles = {
  container: (styles: any) => ({
    ...styles,

    width: "100%",
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "transparent",
    borderColor: "#131A32",
    borderWidth: 2,
    borderRadius: 10,
    color: "fff",
    width: "100%",
  }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    // const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled ? "red" : "#28304b",
      color: "#fff",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  menu: (styles: any) => ({
    ...styles,
    color: "fff",
    backgroundColor: "#28304b",
    borderColor: "#131A32",
    borderWidth: 2,
  }),
  input: (styles: any) => ({
    ...styles,
    color: "fff",
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    color: "fff ",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "fff ",
  }),
  button: (styles: any) => ({
    ...styles,
    color: "fff ",
    backgroundColor: "#131A32",
    borderRadius: 15,
  }),

  multiValue: (styles: any) => ({
    ...styles,
    backgroundColor: "#131A32",
    borderColor: "",
    borderRadius: 15,
  }),
};
