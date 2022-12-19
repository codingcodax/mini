export interface Snippet {
  title: string;
  type: 'link' | 'button' | 'input' | 'loader';
  githubLink: string;
  playgroundLink: string;
  source: JSX.Element;
  animation?: string;
}
