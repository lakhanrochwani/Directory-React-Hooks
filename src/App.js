import React, { useState } from 'react';
import './style.css';
import Directory from './Directory.js';

export default function App() {
  let sample_dir = {
    id: 1,
    name: 'P1',
    children: [
      {
        id: 2,
        name: 'C1_P1',
        children: [
          {
            id: 3,
            name: 'C1_C1_P1',
          },
          {
            id: 4,
            name: 'C2_C1_P1',
            children: [
              {
                id: 5,
                name: 'C1_C2_C1_P1',
              },
              {
                id: 9,
                name: 'C2_C2_C1_P1',
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: 'C2_P1',
      },
      {
        id: 7,
        name: 'C3_P1',
        children: [
          {
            id: 8,
            name: 'C1_C3_P1',
            children: [
              {
                id: 10,
                name: 'C1_C1_C3_P1',
                children: [
                  {
                    name: 'C1_C1_C1_C3_P1',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  let [directory, setDirectory] = useState(sample_dir);
  let [open, setOpen] = useState(false);
  console.log(sample_dir);
  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        {directory.name}
      </div>
      <div style={{ marginLeft: 10 }}>
        {open &&
          directory.children.map((child, i) => (
            <Directory key={i} child={child} />
          ))}
      </div>
    </div>
  );
}
