import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {

  return (
    <div>
      <Slider />
    </div>
  )
}
