import Word from "./Word";
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
export default function Day() {
  //dummy.words

  //   const a=useParams();
  //   const day= a.day;
  // OR
  //   const day = useParams().day;
  // OR
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
