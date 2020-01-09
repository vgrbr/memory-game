import React from "react";
const style = {
  background: "#009951",
  borderRadius: "15px",
  padding: 30
};
export default function Table({ children }) {
  return <div style={style}>{children}</div>;
}
