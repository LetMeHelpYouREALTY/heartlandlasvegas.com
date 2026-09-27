export {};

declare global {
  interface Window {
    __amenityMapsInit?: () => void;
  }
}
