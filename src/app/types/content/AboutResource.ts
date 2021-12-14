export interface AboutResource {
  introduction: {
    en: string;
    hu: string;
  };
  skills: Record<string, number>;
  techCloud: string[];
}
