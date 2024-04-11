import { FileState } from "./reducers/reducers";

export interface RootState {
  files: FileState;
  initialState: FileState;
}
