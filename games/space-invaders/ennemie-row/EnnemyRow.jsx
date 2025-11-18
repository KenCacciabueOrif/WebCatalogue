import React from "react";
import Enemy1 from "../enemies/enemy-1/Enemy1";
import Enemy2 from "../enemies/enemy-2/Enemy2";
import '../ennemie-row/ennemie-row.css'

export default function EnnemyRow() {
  return (
    <div className="row">
      <Enemy1 />
      <Enemy1 />
    </div>
  );
}
