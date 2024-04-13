import { useState } from "react";
import { useDispatch } from "react-redux";

import { addFiles } from "../store/actions/actions";

export const FileActions = () => {
  const [, setFiles] = useState<string[]>([]);
  const dispatch = useDispatch();

  
  const handleButtonFile = async () => {
    await handleSelection("file");
  };

  const handleButtonFolder = async () => {
    await handleSelection("folder");
  };

  const updateFiles = (newFiles: string[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    dispatch(addFiles(newFiles));
    
  };

  const handleSelection = async (selectionType: "file" | "folder") => {
    try {
      let names = [];

      if (selectionType === "file") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fileHandles = await(window as any).showOpenFilePicker({
          multiple: true,
        });
        names = await Promise.all(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fileHandles.map(async (fileHandle: any) => {
            const file = await fileHandle.getFile();
            return file.name;
          })
        );
      } else if (selectionType === "folder") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const directoryHandle = await(window as any).showDirectoryPicker();
        const entries = await directoryHandle.values();
        for await (const entry of entries) {
          names.push(entry.name);
        }
      }

      updateFiles(names);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err) {
      //
    }
  };

  return { handleButtonFile, handleButtonFolder };
};
