import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function SearchBox() {
  return (
    <div>
      <h3>Search for the weather</h3>
      <form action="">
        <TextField id="city" label="City Name" variant="outlined" required />
        <br /><br /><br />
        <Button variant="contained">Search</Button>
      </form>
    </div>
  );
}
