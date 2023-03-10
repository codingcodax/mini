export interface Snippet {
  title: string;
  type: 'link' | 'button' | 'input' | 'loader' | 'other';
  githubLink: string;
  playgroundLink: string;
  source: JSX.Element;
  animation?: string;
}

export interface SnippetType {
  name: string;
  type: string;
  icon: JSX.Element;
}
