import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../redux/comp/compActions";

const Comp = () => {
  const comp = useSelector((state) => state.comp);
  // const toggler = useSelector(another => another.toggleText);
  const dispatch = useDispatch();
  console.log(comp.toggleText);
  return (
    <div>
      {comp.toggleText ? <div>hello</div> : <div>bye</div>}
      <button onClick={() => dispatch(changeText())}>change it</button>
    </div>
  );
};

export default Comp;
