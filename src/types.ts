export interface GameProject {
  id: string;
  slug: string;
  title: string;
  year?: string;
  jobTitle?: string;
  image: string;
  studio?: string;
  platforms?: string;
  criticalReception?: string;
  engineAndTools?: string;
  teamSize?: string;
  projectLength?: string;
  contributionsHtml: string;
}
