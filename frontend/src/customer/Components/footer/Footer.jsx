// import { Grid, Link, Typography } from '@mui/material';

// const Footer = () => {
//   return (
//     <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
//       <Grid  item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Company
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           About
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Blog
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Jobs
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Press
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Partners
//         </Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Solutions
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Marketing
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Analytics
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Commerce
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Insights
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Support
//         </Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Documentation
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Guides
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           API Status
//         </Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Legal
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Claim
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Privacy
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Terms
//         </Typography>
//       </Grid>
//       <Grid className='pt-20' item xs={12} >
//         <Typography variant="body2" component="p" align="center">
//           &copy; 2023 My Company. All rights reserved.
//         </Typography>
//         <Typography variant="body2" component="p" align="center">
//           Made with love by Me.
//         </Typography>
//         <Typography variant="body2" component="p" align="center">
//           Icons made by{' '}
//           <Link href="https://www.freepik.com" color="inherit" underline="always">
//             Freepik
//           </Link>{' '}
//           from{' '}
//           <Link href="https://www.flaticon.com/" color="inherit" underline="always">
//             www.flaticon.com
//           </Link>
//         </Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export default Footer;


import React from "react";
import { useState } from "react";
import { Button, Typography, TextField, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
//import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  // Can snd Submit button login
  const [form, setForm] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, email, query } = form;

    if (!name || !email || !query) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@gmail.com")) {
      setError("Please enter a valid Mail address");
      return;
    }

    setError("");
    const formData = new FormData();
    formData.append("entry.1616766518", name);
    formData.append("entry.1908721813", email);
    formData.append("entry.1982986842", query);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeBGIBu4kw4bDxIDFAN8I4KoNp0PjXZlBmLk3PfkepltytD8w/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      //  {
      //     method: "POST",
      //     body: JSON.stringify(form),
      //     headers: {
      //      "Content-Type": "application/json",   },
      //});

      setMessage("Your query has been submitted successfully!");
      setForm({ name: "", email: "", query: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Box sx={{ bgcolor: "black", color: "white", width: "100%" }}>
      {/* ========== ROW 1 : LEFT + RIGHT (50% / 50%) ========== */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          px: 6,
          py: 8,
        }}
      >
        {/* ---------- PART 1 : Footer Links ---------- */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, pr: { md: 4 } }}>
          {/* Horizontal scroll wrapper for mobile */}
          <Box
            sx={{
              overflowX: { xs: "auto", md: "visible" },
              pb: 2,
              "-webkit-overflow-scrolling": "touch",
            }}
          >
            <Box
              sx={{
                display: "flex", // flex for scrollable columns
                gap: 4,
                width: { xs: "max-content", md: "100%" },
              }}
            >
              {[
                { title: "Company", items: ["About", "Blog", "Press", "Jobs"] },
                {
                  title: "Solution",
                  items: ["Marketing", "Analytics", "Commerce", "Support"],
                },
                {
                  title: "Support",
                  items: ["Submit", "Document", "Guides", "Help"],
                },
                {
                  title: "Legal",
                  items: ["Terms", "Policy", "License", "Claims"],
                },
              ].map((section, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      letterSpacing: "1px",
                      mb: 3,
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                  >
                    {section.title}
                  </Typography>

                  {section.items.map((item, idx) => (
                    <Button key={idx} sx={footerBtnStyle}>
                      {item}
                    </Button>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 3, mt: "auto", pt: 4 }}>
            <InstagramIcon sx={iconStyle} />
            <FacebookIcon sx={iconStyle} />
            <TwitterIcon sx={iconStyle} />
            <LinkedInIcon sx={iconStyle} />
          </Box>
        </Box>

        {/* ---------- PART 2 : Contact Form ---------- */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pl: { md: 4 },
            mt: { xs: 6, md: 0 },
            display: "flex",
            flexDirection: "column",
            maxWidth: "420px", // keeps form neat & not oversized
          }}
        >
          <Typography variant="h6" sx={ {color: "#fff", mb: 2 ,}}>
            Contact Us
          </Typography>

          <TextField
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            sx={inputStyle}
            required
          />

          <TextField
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            sx={inputStyle}
            required
          />

          <TextField
            name="query"
            value={form.query}
            onChange={handleChange}
            placeholder="Your Query"
            multiline
            rows={3}
            sx={inputStyle}
            required
          />

          <Button sx={submitBtn} onClick={handleSubmit}>
            <Typography sx={{ color: "#fff" }}>Submit</Typography>
          </Button>

          {error && (
            <Typography sx={{ color: "red", mt: 1 }}>{error}</Typography>
          )}

          {message && (
            <Typography sx={{ color: "#4caf50", mt: 1 }}>{message}</Typography>
          )}
        </Box>
      </Box>

      {/* ========== ROW 2 : FULL WIDTH COPYRIGHT ========== */}
      <Box
        sx={{
          bgcolor: "#272626",
          py: 3,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2" sx={{ color: "#fff" }}>
          © 2025 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff" }}>Made with ❤️</Typography>
      </Box>
    </Box>
  );
};

export default Footer;

/* ================= STYLES ================= */

const iconStyle = {
  fontSize: "2rem",
  cursor: "pointer",
  color: "#fff",
  transition: "0.3s",
  "&:hover": {
    color: "#3673f6",
    transform: "scale(1.2)",
    fontSize: "2.5 rem",
  },
};

const footerBtnStyle = {
  color: "#fff",
  textTransform: "none",
  justifyContent: "flex-start",
  display: "block",
  fontSize: "0.95rem",
  p: 0,
  mb: 1,
  "&:hover": {
    color: "#fff",
    backgroundColor: "transparent",
    transform: "translateX(4px)",
  },
};

// const inputStyle = {
//   mb: 2,
//   bgcolor: "#111",
//   borderRadius: 1,
//   input: { color: "white" },
//   textarea: { color: "white" },
// };

const inputStyle = {
  mb: 2,
  bgcolor: "#fff",
  borderRadius: 1,

  "& .MuiInputBase-input": {
    color: "#231f1f", // user input text BLACK
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#7e7c7c", // placeholder BLACK
    opacity: 1,
  },

  "& .MuiInputLabel-root": {
    color: "#000",
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",

    "& fieldset": {
      borderColor: "#000",
    },

    "&:hover fieldset": {
      borderColor: "#000",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
};




const submitBtn = {
  bgcolor: "#0552fa",
  color: "white",
  mt: 1,
  alignSelf: "flex-start",
  px: 4,
  "&:hover": { bgcolor: "#064ef4" },
};

