import { ActiveWindow } from "./ActiveWindow";
import { Browser } from "./Browser";
import { Clipboard } from "./Clipboard";
import { Workspace } from "./Workspace";
import { FaireContext } from "./Context";

export class ContextEngine {

  private activeWindow = new ActiveWindow();

  private browser = new Browser();

  private clipboard = new Clipboard();

  private workspace = new Workspace();

  async getContext(): Promise<FaireContext> {

    const application = await this.activeWindow.getApplication();

    const windowTitle = await this.activeWindow.getWindowTitle();

    const browser = await this.browser.getContext();

    const clipboard = await this.clipboard.readText();

    const workspace = await this.workspace.getWorkspace();

    return {

      timestamp: Date.now(),

      application,

      windowTitle,

      browser,

      clipboard,

      workspace

    };

  }

}
