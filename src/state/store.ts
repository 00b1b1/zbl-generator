import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { StateCreator } from 'zustand';

export type ElementsSlice = {
  elements: {
    items: unknown[];
    selectedId: string | null;
  };
  addElement: (element: unknown) => void;
  removeElement: (id: string) => void;
  selectElement: (id: string | null) => void;
};

export type CanvasSlice = {
  canvas: {
    zoom: number;
    unit: 'in' | 'mm';
    showGrid: boolean;
  };
  setZoom: (zoom: number) => void;
  setUnit: (unit: 'in' | 'mm') => void;
  toggleGrid: (value?: boolean) => void;
};

export type HistorySlice = {
  history: {
    stack: unknown[];
    pointer: number;
    pending: boolean;
  };
  pushHistory: (snapshot: unknown) => void;
  stepBackward: () => void;
  stepForward: () => void;
};

export type StoreState = ElementsSlice & CanvasSlice & HistorySlice;

type ImmerSlice<TSlice> = StateCreator<StoreState, [['zustand/immer', never]], [], TSlice>;

const createElementsSlice: ImmerSlice<ElementsSlice> = (_set, _get, _api) => ({
  elements: {
    items: [],
    selectedId: null
  },
  addElement: (element) => {
    void element;
  },
  removeElement: (id) => {
    void id;
  },
  selectElement: (id) => {
    void id;
  }
});

const createCanvasSlice: ImmerSlice<CanvasSlice> = (_set, _get, _api) => ({
  canvas: {
    zoom: 1,
    unit: 'in',
    showGrid: true
  },
  setZoom: (zoom) => {
    void zoom;
  },
  setUnit: (unit) => {
    void unit;
  },
  toggleGrid: (value) => {
    void value;
  }
});

const createHistorySlice: ImmerSlice<HistorySlice> = (_set, _get, _api) => ({
  history: {
    stack: [],
    pointer: -1,
    pending: false
  },
  pushHistory: (snapshot) => {
    void snapshot;
  },
  stepBackward: () => undefined,
  stepForward: () => undefined
});

export const useStore = create<StoreState>()(
  immer((set, get, api) => ({
    ...createElementsSlice(set, get, api),
    ...createCanvasSlice(set, get, api),
    ...createHistorySlice(set, get, api)
  }))
);
