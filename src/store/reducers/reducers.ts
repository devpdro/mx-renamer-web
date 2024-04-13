interface InstallFilesAction {
  type: "INSTALL_FILES";
  payload: File;
}

type FileAction = AddFilesAction | InstallFilesAction;

// Definição de tipos para o estado inicial e a ação
export interface FileState {
  idCounter: number;
  id: string[];
  file: never[];
  name: string[];
  newName: never[];
  size: any[];
  install: string[];
}

interface AddFilesAction {
  type: "ADD_FILES";
  payload: string[];
}

// Estado inicial
export const initialState: FileState = {
  idCounter: 1,
  id: [],
  file: [],
  name: [],
  newName: [],
  size: [],
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

      // Atualiza o estado com os novos IDs e nomes de arquivos
      console.log("Nomes dos arquivos adicionados:", action.payload);
      return {
        ...state,
        idCounter: state.idCounter,
        id: [...state.id, ...newIds],
        name: [...state.name, ...action.payload], // Adiciona todos os novos nomes
      };
    }
    case "INSTALL_FILES": {
      // Aqui você pode adicionar a lógica para instalar os arquivos
      // Por exemplo, definir o estado de instalação como concluído
      console.log("Arquivos instalados:", action.payload);
      return {
        ...state,
        install: ["completed"], // Defina como concluído após a instalação
      };
    }
    // Outros casos de reducer para outras ações
    default:
      return state;
  }
};

export default fileReducer;
