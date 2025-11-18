import React from "react";
import EnnemyRow from "../ennemie-row/EnnemyRow";
import './EnnemyBlock.css'

export default function EnnemyBlock() {
  return (
    <div className="block">
      <EnnemyRow />
      <EnnemyRow />
      <EnnemyRow />
      <EnnemyRow />
      <EnnemyRow />
      <EnnemyRow />
      <EnnemyRow />
    </div>
  );
}
