import React, { useState } from 'react';

function Directory(props) {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.child.name}
      </div>
      <div style={{ marginLeft: 20 }}>
        {open &&
          (props.child.children
            ? props.child.children.map((child, i) => (
                <Directory key={i} child={child} />
              ))
            : null)}
      </div>
    </div>
  );
}

export default Directory;
