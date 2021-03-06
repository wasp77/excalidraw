import { ExcalidrawElement } from "../element/types";
import { AppState, LibraryItems } from "../types";

export interface DataState {
  type?: string;
  version?: string;
  source?: string;
  elements: readonly ExcalidrawElement[];
  appState: MarkOptional<AppState, "offsetTop" | "offsetLeft"> | null;
}

export interface LibraryData {
  type?: string;
  version?: number;
  source?: string;
  library?: LibraryItems;
}
