import { useContext } from "react";

export default function Third() {
  const parentCtx = useContext(Ctx);
  return <div className="third">第三级</div>;
}
