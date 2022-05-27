import { useEffect } from "react";
import axios from "axios";

export function useFecth(url: string) {
  useEffect(() => {
    axios.get("http://localhost:3333/task");
  });
}
