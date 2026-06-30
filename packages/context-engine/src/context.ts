export interface BrowserContext {
  title?: string;
  url?: string;
  domain?: string;
}

export interface WorkspaceContext {
  cwd?: string;
  project?: string;
  gitBranch?: string;
}

export interface FaireContext {
  timestamp: number;

  application: string;
  windowTitle: string;

  browser?: BrowserContext;

  clipboard?: string;

  workspace?: WorkspaceContext;
}
