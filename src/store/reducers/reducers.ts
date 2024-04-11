const initialState = {
  id: [],
  file: [],
  name: [],
  newName: [],
  install: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_FILES":
      return {
        ...state,
        name: action.payload,
        files: [...state.file, ...action.payload],
      };
    // Outros casos de reducer para outras ações
    default:
      return state;
  }
};

export default fileReducer;
