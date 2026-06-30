interface OrbProps {

  open: boolean;

  onClick: () => void;

}

export default function Orb({

  open,

  onClick,

}: OrbProps) {

  return (

    <button

      className="orb"

      onClick={onClick}

    >

      {open ? "✦" : "●"}

    </button>

  );

}
