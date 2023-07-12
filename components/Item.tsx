import { RefObject, useEffect, useState } from "react";

export default function Item({
  name,
  id,
  check,
  onDel,
}: {
  name: string;
  id: number;
  check: boolean;
  onDel: () => void;
}) {
  const [checked, setChecked] = useState(check);

  return (
    
    <div 
    key={id} 
    id={id.toString()}
    onClick={() => setChecked(!checked)}
    className={"mb-2 mx-2 max-w-lg flex rounded px-2" + (checked ? " bg-lightBlue-100 hover:bg-lightBlue-200" : " bg-lightBlue-300 hover:bg-lightBlue-500")}
    >
      <input
        type="checkbox"
        className="fa-check m-2 w-6 cursor-pointer appearance-none rounded border-solid bg-lightBlue-100 text-base checked:bg-[#3da9fc]"
        title="Mark as done"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <p className={"m-2 flex-1" + (checked ? " line-through italic" : "")}>{name}</p>
      <button
        title="Delete"
        onClick={onDel}
        className="fa-trash row-end-1 m-2 text-blue-700 hover:text-[#ef4565]"
      ></button>
    </div>
  );
}
