// Definição de tipos para o estado inicial e a ação
interface FileState {
  idCounter: number;
  id: string[];
  file: never[];
  name: string[];
  newName: never[];
  install: never[];
}

interface AddFilesAction {
  type: "ADD_FILES";
  payload: string[];
}

type FileAction = AddFilesAction;

// Estado inicial
const initialState: FileState = {
  idCounter: 1,
  id: [],
  file: [],
  name: [],
  newName: [],
  install: [],
};

// Reducer
const fileReducer = (
  state: FileState = initialState,
  action: FileAction
): FileState => {
  switch (action.type) {
    case "ADD_FILES": {
      const newIds = action.payload.map(() => {
        const newId = state.idCounter.toString();
        state.idCounter++;
        return newId;
      });
      return {
        ...state,
        idCounter: state.idCounter, // Mantém o contador de ID
        id: [...state.id, ...newIds],
        name: [...state.name, ...action.payload],
      };
    }
    // Outros casos de reducer para outras ações
    default:
      return state;
  }
};

export default fileReducer;
