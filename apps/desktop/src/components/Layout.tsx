import { useState } from "react";
import Orb from "./Orb";
import ChatPanel from "./ChatPanel";

export default function Layout() {

  const [open, setOpen] = useState(false);

  return (

    <div>

      <Orb
        open={open}
        onClick={() => setOpen(!open)}
      />

      {open && <ChatPanel />}

    </div>

  );

}

