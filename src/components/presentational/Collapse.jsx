import { useState } from "react";

export const Collapse = ({ className, title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className} onClick={() => setOpen(!open)}>
      <h3>{title}</h3>
      {open && content}
    </div>
  );
};
