// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addFiles = (files: any) => {
  return {
    type: "ADD_FILES",
    payload: files,
  };
};
