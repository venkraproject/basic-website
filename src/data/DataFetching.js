import axios from "axios";
import Papa from "papaparse";

function DataFetch(dataName, setData ) {

    const config = {
        delimiter: ",",
        header: true,
    };

    const url = `https://docs.google.com/spreadsheets/d/1yUm7UE_t5Zu3wojkEb-aXRL1FzOq9ktx2dCGtrfl4Vo/gviz/tq?tqx=out:csv&sheet=${dataName}`;
    axios
        .get(url)
        .then((res) => {
            const fetchedData = Papa.parse(res.data, config).data;
            setData(fetchedData)
            console.log(`${dataName} loaded succesfully`);
            console.log(fetchedData);
        })
        .catch((err) => {
            console.log(`${dataName} failed to load`);
            console.log(err);
        });
}

export { DataFetch };
