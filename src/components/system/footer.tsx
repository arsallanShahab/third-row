import React from "react";
import { Link } from "react-router";
import FlexContainer from "./flex-container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FlexContainer variant="column-start" className="p-15 bg-[#E7E7E7]">
      <FlexContainer>
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-20 w-auto object-contain"
        />
      </FlexContainer>
      <FlexContainer variant="row-start" gap="7xl">
        <FlexContainer variant="column-start">
          <h4 className="text-2xl font-semibold">Who we are?</h4>
          <p className="text-[var(--grey)] max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </FlexContainer>
        <FlexContainer className="gap-20">
          <FlexContainer variant="column-start" gap="lg">
            <h4 className="text-xl font-semibold">Main links</h4>
            <FlexContainer variant="column-start" gap="md">
              <Link to="/" className="text-[var(--grey)]">
                Home
              </Link>
              <Link to="/about" className="text-[var(--grey)]">
                About
              </Link>
              <Link to="/services" className="text-[var(--grey)]">
                Services
              </Link>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer variant="column-start" gap="lg">
            <h4 className="text-xl font-semibold">Help</h4>
            <FlexContainer variant="column-start" gap="md">
              <Link to="/" className="text-[var(--grey)]">
                Concert Ticketing
              </Link>
              <Link to="/" className="text-[var(--grey)]">
                Account Support
              </Link>
              <Link to="/" className="text-[var(--grey)]">
                Terms & Conditions
              </Link>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer variant="column-start" gap="lg">
            <h4 className="text-xl font-semibold">Legal</h4>
            <FlexContainer variant="column-start" gap="md">
              <Link to="/" className="text-[var(--grey)]">
                Terms of Us
              </Link>
              <Link to="/" className="text-[var(--grey)]">
                Acceptable
              </Link>
              <Link to="/" className="text-[var(--grey)]">
                Privacy Policy
              </Link>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer variant="row-between" className="py-10">
        <p className="text-[#222222] text-sm">@2025 Third Row</p>
        <FlexContainer alignItems="center">
          <Link to={"/"} className="text-[#222222] text-sm">
            Terms
          </Link>
          <Link to={"/"} className="text-[#222222] text-sm">
            Privacy
          </Link>
          <Link to={"/"} className="text-[#222222] text-sm">
            Cookies
          </Link>
        </FlexContainer>
        <FlexContainer alignItems="center">
          <img src="/Facebook.svg" alt="Facebook" className="h-6 w-6" />
          <img src="/Twitter.svg" alt="Twitter" className="h-6 w-6" />
          <img src="/Telegram.svg" alt="Instagram" className="h-6 w-6" />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Footer;
