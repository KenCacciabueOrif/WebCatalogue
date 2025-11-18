// src/Enemy.jsx
import React from "react";
import "../enemies/enemy.css"



export default function Enemy() {

  return (
    <>
      <table>
        <tbody>
          {[...Array(8)].map((_, row) => (
            <tr key={row}>
              {[...Array(11)].map((_, col) => (
                <td key={col}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
