import { BeatLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="h-[150px] flex justify-center items-center">
      <BeatLoader speedMultiplier={3} color={"#555"} />
    </div>
  );
}
