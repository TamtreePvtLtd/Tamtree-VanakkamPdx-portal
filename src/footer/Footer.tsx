import {
  Box,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Qrcode from "../../src/assets/WhatsApp Qr code .jpg";
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

const ourTimingStyles = {
  borderBottom: "none",
  p: 0.3,
  color: "white",
  fontSize: "14px",
};
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface IconProps {
  style?: React.CSSProperties;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const InstagramIcon: React.FC<IconProps> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width="102"
    height="102"
    viewBox="0 0 102 102"
    id="instagram"
  >
    <defs>
      <radialGradient
        id="a"
        cx="6.601"
        cy="99.766"
        r="129.502"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".09" stopColor="#fa8f21"></stop>
        <stop offset=".78" stopColor="#d82d7e"></stop>
      </radialGradient>
      <radialGradient
        id="b"
        cx="70.652"
        cy="96.49"
        r="113.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
        <stop offset="1" stopColor="#8c3aaa"></stop>
      </radialGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      data-name="Path 16"
    ></path>
    <path
      fill="url(#b)"
      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      data-name="Path 17"
    ></path>
    <path
      fill="#fff"
      d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
      data-name="Path 18"
      transform="translate(-422.637 -426.196)"
    ></path>
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
  >
    <path
      fill="#fff"
      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
    ></path>
    <path
      fill="#fff"
      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
    ></path>
    <path
      fill="#cfd8dc"
      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
    ></path>
    <path
      fill="#40c351"
      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    viewBox="0 0 16 16"
    id="facebook"
  >
    <path
      fill="#1976D2"
      d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
    ></path>
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ style, ...props }) => (
  <a
    href="https://www.google.com/maps/place/VANAKKAM+PDX/@45.5311376,-122.8345254,16z/data=!4m6!3m5!1s0x54950f0b925f43df:0xfe6b4e88b2dd29d8!8m2!3d45.5312428!4d-122.8305343!16s%2Fg%2F11vr4dd7jy?authuser=0&entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="20"
      height="20"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      {...props}
    >
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 45 90 c -1.415 0 -2.725 -0.748 -3.444 -1.966 l -4.385 -7.417 C 28.167 65.396 19.664 51.02 16.759 45.189 c -2.112 -4.331 -3.175 -8.955 -3.175 -13.773 C 13.584 14.093 27.677 0 45 0 c 17.323 0 31.416 14.093 31.416 31.416 c 0 4.815 -1.063 9.438 -3.157 13.741 c -0.025 0.052 -0.053 0.104 -0.08 0.155 c -2.961 5.909 -11.41 20.193 -20.353 35.309 l -4.382 7.413 C 47.725 89.252 46.415 90 45 90 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(4,136,219)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M 45 45.678 c -8.474 0 -15.369 -6.894 -15.369 -15.368 S 36.526 14.941 45 14.941 c 8.474 0 15.368 6.895 15.368 15.369 S 53.474 45.678 45 45.678 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#fff",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </a>
);

const openingHours = [
  { day: "Monday", timing: "11 AM - 9.30 PM" },
  { day: "Tuesday", timing: "11 AM - 9.30 PM" },
  { day: "Wednesday", timing: "11 AM - 9.30 PM" },
  { day: "Thursday", timing: "11 AM - 9.30 PM" },
  { day: "Friday", timing: "11 AM - 12 AM" },
  { day: "Saturday", timing: "11 AM - 12 AM" },
  { day: "Sunday", timing: "11 AM - 9.30 PM" },
];

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      style={{
        backgroundColor: "#6B0101",
        color: "#e7e7e7",
        textAlign: "center",
      }}
    >
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Grid
          container
          rowSpacing={0}
          spacing={2}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: isMedium ? "40px" : 0 }}
        >
          <Grid item xs={12} sm={5.5} lg={2.5}>
            <Animate keyframes={slideInLeft}>
              <Box display="flex" justifyContent="center">
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "VanakkamPDX-Logo-Font",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginTop: isMobile ? 5 : -3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  component="p"
                >
                  <a
                    href={"https://maps.app.goo.gl/fvMD1uMmsUV5DVHM9"}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PlaceIcon sx={{ color: "#0077dd" }} />
                    &nbsp; Address
                  </a>
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 0.5,
                    color: "#d4d4d4",
                    textDecoration: "none",
                  }}
                >
                  <p style={{textAlign:"center",wordWrap:"break-word"}}> 14740 Cornell Rd #160, Portland 97229</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      style={{ color: "inherit", textDecoration: "none" }}
                      href="tel:+15037472049"
                    >
                      <PhoneIcon sx={{ color: "#E4973C" }} />
                    </a>
                    <p>&nbsp;Store No:</p>
                    <a
                      style={{ color: "inherit", textDecoration: "none" }}
                      href="tel:+15037472049"
                    >
                      <p> &nbsp;&nbsp;+1 (503) 747-2049</p>
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      style={{ color: "inherit", textDecoration: "none" }}
                      href="tel:+19714548476"
                    >
                      <PhoneIcon sx={{ color: "#E4973C" }} />
                    </a>
                    <p>&nbsp;Ph No:</p>
                    <a
                      style={{ color: "inherit", textDecoration: "none" }}
                      href="tel:+19714548476"
                    >
                      <p>&nbsp;&nbsp; +1 (971) 454-8476</p>
                    </a>
                  </div>
                </Typography>
              </Box>
            </Animate>
          </Grid>
          {isMobile ? null : isMedium ? (
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#fff",
                height: "100px",
                alignSelf: "center",
                marginTop: "30px",
              }}
            />
          ) : (
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#fff",
                height: "100px",
                alignSelf: "center",
                marginTop: "30px",
              }}
            />
          )}
          <Grid item xs={12} sm={5.5} lg={2.5}>
            <Animate keyframes={slideInRight}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "VanakkamPDX-Logo-Font",
                  fontSize: "20px",
                  marginTop: isMobile ? 5 : -4.5,
                  fontWeight: 700,
                }}
                component="p"
              >
                Join Our WhatsApp Group
              </Typography>
              <a
                href="https://chat.whatsapp.com/FMUJCqwPjPK636Z23FYWnn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{
                    width: "70px",
                    height: "75px",
                    marginRight: "10px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                  src={Qrcode}
                  alt="QR Code"
                />
              </a>
            </Animate>
          </Grid>
          {isMobile ? null : isMedium ? null : (
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#fff",
                height: "100px",
                alignSelf: "center",
                marginTop: "30px",
              }}
            />
          )}
          <Grid item xs={12} sm={5.5} lg={2.5}>
            <Animate keyframes={slideInLeft}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "VanakkamPDX-Logo-Font",
                  fontSize: "22px",
                  marginTop: isMobile ? 5 : -8,
                  fontWeight: 700,
                }}
                component="p"
              >
                Contact Us
              </Typography>
              <Box display="flex" justifyContent="center" marginTop={2} gap={1}>
                <a
                  href="https://www.instagram.com/vanakkampdx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    style={{ width: "30px", height: "30px", margin: "0 5px" }}
                  />
                </a>
                <a
                  href="https://wa.me/19714548476"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon
                    style={{
                      width: "35px",
                      height: "35px",
                      margin: "-2 5px",
                      marginBottom: "20px",
                    }}
                  />
                </a>

                <a
                  href="https://www.facebook.com/people/Vanakkam-PDX/61558011470925/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon
                    style={{ width: "30px", height: "30px", margin: "0 5px" }}
                  />
                </a>
              </Box>
            </Animate>
          </Grid>
          {isMobile ? null : isMedium ? (
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#fff",
                height: "100px",
                alignSelf: "center",
                marginTop: "30px",
              }}
            />
          ) : (
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: "#fff",
                height: "100px",
                alignSelf: "center",
                marginTop: "30px",
              }}
            />
          )}

          <Grid
            item
            sm={5.5}
            xs={12}
            lg={2.5}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ my: 1 }}>
              <Animate>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "VanakkamPDX-Logo-Font",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginTop: 4,
                    color: "#fff",
                  }}
                >
                  Our Timing
                </Typography>

                <TableContainer>
                  <Table>
                    <TableBody>
                      {openingHours.map((item) => (
                        <TableRow key={item.day}>
                          <TableCell
                            sx={{ ...ourTimingStyles, color: "#d4d4d4" }}
                          >
                            {item.day}
                          </TableCell>
                          <TableCell
                            sx={{
                              ...ourTimingStyles,
                              paddingLeft: "15px",
                              color: "#d4d4d4",
                            }}
                          >
                            {item.timing}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Animate>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="body2"
        sx={{
          textWrap: isMobile ? "wrap" : "nowrap",
          opacity: 0.7,
          textAlign: isMobile ? "center" : "center",
          padding: "10px",
        }}
      >
        CopyRights©{new Date().getFullYear()}. All rights reserved by VANAKKAM
        PDX.
      </Typography>
    </Box>
  );
};

export default Footer;
