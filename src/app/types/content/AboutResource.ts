export interface AboutResource {
  introduction: {
    en: string;
    hu: string;
    kr: string;
  };
  skills: Record<string, number>;
  techCloud: string[];
}
