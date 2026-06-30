import { WorkspaceContext } from "./Context";

export class Workspace {

  async getWorkspace(): Promise<WorkspaceContext> {

    return {

      cwd: "",

      project: "",

      gitBranch: ""

    };

  }

}
