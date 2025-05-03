"use client";

import React, { useEffect, useState } from "react";

interface FormProps {
  onFormValidityChange: (isValid: boolean) => void; // Funcție trimisă de Payment
}

const Form = ({ onFormValidityChange }: FormProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    const isFormValid =
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      county.trim() !== "" &&
      city.trim() !== "" &&
      address.trim() !== "" &&
      postalCode.trim() !== "";

    onFormValidityChange(isFormValid);
  }, [
    fullName,
    email,
    phone,
    county,
    city,
    address,
    postalCode,
    onFormValidityChange,
  ]);

  return (
    <div className="w-[90%] h-full flex flex-col gap-3">
      {/* Nume si Prenume */}
      <div className="flex flex-col gap-3">
        <label
          htmlFor="fullName"
          className="font-normal text-lg md:text-[20px] text-start"
        >
          Nume și Prenume
        </label>
        <input
          id="fullName"
          type="text"
          className="form-input-style"
          placeholder="Introdu numele și prenumele"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      {/* Email și Telefon */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 w-[47.5%]">
          <label
            htmlFor="email"
            className="font-normal text-lg md:text-[20px] text-start"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input-style"
            placeholder="Introdu adresa de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 w-[47.5%]">
          <label
            htmlFor="phone"
            className="font-normal text-lg md:text-[20px] text-start"
          >
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            className="form-input-style"
            placeholder="Introdu numărul de telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      {/* Județ și Localitate */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 w-[47.5%]">
          <label
            htmlFor="county"
            className="font-normal text-lg md:text-[20px] text-start"
          >
            Județ
          </label>
          <input
            id="county"
            type="text"
            className="form-input-style"
            placeholder="Introdu județul"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 w-[47.5%]">
          <label
            htmlFor="city"
            className="font-normal text-lg md:text-[20px] text-start"
          >
            Localitate
          </label>
          <input
            id="city"
            type="text"
            className="form-input-style"
            placeholder="Introdu localitatea"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      {/* Adresă și Cod Poștal */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 w-[47.5%]">
          <label
            htmlFor="address"
            className="font-normal text-lg md:text-[20px] text-start"
          >
            Adresă
          </label>
          <input
            id="address"
            type="text"
            className="form-input-style"
            placeholder="Introdu adresa completă"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 w-[47.5%]">
          <label
            htmlFor="postalCode"
            className="font-normal text-lg md:text-[20px] text-start"
          >
            Cod Poștal
          </label>
          <input
            id="postalCode"
            type="text"
            className="form-input-style"
            placeholder="Introdu codul poștal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
