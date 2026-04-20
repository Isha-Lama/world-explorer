export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  population: number;
  region: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: {
    [key: string]: string;
  };
  cca3: string; 
}