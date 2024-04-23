import * as React from "react";
//import StartTour from "./StartTouring.js";
import axios from "axios";
import { redirect } from 'next/navigation'


  
 export default function SetTour({ onSubmit }) {
    const [data, setData] = useState({}); // State for form data
    

      //useEffect and the empty [] stops the code from running in an infinite loop and making hundreds of calls to the API
  useEffect(() => {
    getData();
  }, []);

  // function to fetch data using Axios
  const getData = () => {
    axios
      .get(data
      )
      .then((res) => {
        console.log(res);
        setData({ data: res.data, loading: false, error: false });
      })
      .catch((err) => {
        setData({ ...data, data: {}, error: true });
      });
  };

        if (data.buildings) {
          redirect("../tours/(purple-tours)/purple-b")
        } else if 
          (data.buildings && data.statues) {
          redirect("../tours/(purple-tours)/purple-b-s")
        } else if 
        (data.buildings && data.statues && data.landmarks) {
        redirect("../tours/(purple-tours)/purple-b-l-s")
      } else if 
        (data.statues) {
        redirect("../tours/(purple-tours)/purple-s")
      }
      else if 
        (data.statues && data.landmarks) {
        redirect("../tours/(purple-tours)/purplel-s")
      }
      else if 
        (data.landmarks) {
        redirect("../tours/(purple-tours)/purple-l")
      }
      else if 
        (data.landmarks && data.buildings) {
        redirect("../tours/(purple-tours)/purple-b-l")
      }
      };
