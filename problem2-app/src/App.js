import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SwapComponent />
      </div>
    </div>
  );
}

const currencies = [
  { value: "ETH", label: "ETH" },
  { value: "MATIC", label: "MATIC" },
];

const SwapComponent = () => {
  const [currency1, setCurrency1] = useState("ETH");
  const [currency2, setCurrency2] = useState("MATIC");
  const [amount1, setAmount1] = useState(53.5);
  const [amount2, setAmount2] = useState(53.5);
  const [isNumber1, setIsNumber1] = useState(true);
  const [isNumber2, setIsNumber2] = useState(true);

  const checkNumber = (input, typeNumber) => {
    const parsedInput = Number(input);
    const isNumber = !isNaN(parsedInput);
    switch (typeNumber) {
      case "typeNumber1":
        setIsNumber1(isNumber);
        setAmount1(input);
        break;
      case "typeNumber2":
        setIsNumber2(isNumber);
        setAmount2(input);
        break;
    }
  };

  const handleSwap = () => {
    alert("Swap successed");
  };

  return (
    <Box
      sx={{
        width: 400,
        padding: 3,
        borderRadius: 6,
        backgroundColor: "#1b3a57",
        color: "#ffffff",
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Swap
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TextField
          select
          value={currency1}
          onChange={(e) => setCurrency1(e.target.value)}
          variant="outlined"
          sx={{ width: "40%", backgroundColor: "#2c4f6e" }}
          InputProps={{ style: { color: "#ffffff" } }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          error={!isNumber1}
          value={amount1}
          onChange={(e) => checkNumber(e.target.value, "typeNumber1")}
          variant="outlined"
          sx={{ width: "55%", backgroundColor: "#2c4f6e" }}
          InputProps={{ style: { color: "#ffffff" } }}
          placeholder="Amount currency"
          helperText={!isNumber1 ? "Must be a number" : ""}
        />
      </Box>
      <Box display="flex" justifyContent="center" my={2}>
        <SwapVertIcon sx={{ fontSize: 40 }} />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TextField
          select
          value={currency2}
          onChange={(e) => setCurrency2(e.target.value)}
          variant="outlined"
          sx={{ width: "40%", backgroundColor: "#2c4f6e" }}
          InputProps={{ style: { color: "#ffffff" } }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          error={!isNumber2}
          value={amount2}
          onChange={(e) => checkNumber(e.target.value, "typeNumber2")}
          variant="outlined"
          sx={{ width: "55%", backgroundColor: "#2c4f6e" }}
          InputProps={{ style: { color: "#ffffff" } }}
          placeholder="Amount currency"
          helperText={!isNumber2 ? "Must be a number" : ""}
        />
      </Box>
      <Divider sx={{ backgroundColor: "#ffffff", marginY: 2 }} />
      <Typography variant="body2" align="center" gutterBottom>
        Expected Output: 2709.84 ETH
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Price impact: 0.36%
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        1 ETH = 0.001441 ($4.4565)
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%" }}
          disabled={!isNumber1 || !isNumber2}
          onClick={handleSwap}
        >
          Swap
        </Button>
      </Box>
    </Box>
  );
};

export default App;
