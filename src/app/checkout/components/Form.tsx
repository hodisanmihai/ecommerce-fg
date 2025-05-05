"use client";

import React, { useEffect } from "react";
import { useForm } from "./context/FormContext"; // Importăm contextul pentru a salva datele

interface FormProps {
  onFormValidityChange: (isValid: boolean) => void; // Funcție trimisă de Payment
}

const Form = ({ onFormValidityChange }: FormProps) => {
  const { formData, setFormData } = useForm(); // Accesăm contextul pentru a salva datele formularului

  useEffect(() => {
    const isFormValid =
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.county.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.postalCode.trim() !== "";

    onFormValidityChange(isFormValid);
  }, [formData, onFormValidityChange]);

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
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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
            value={formData.county}
            onChange={(e) =>
              setFormData({ ...formData, county: e.target.value })
            }
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
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
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
            value={formData.postalCode}
            onChange={(e) =>
              setFormData({ ...formData, postalCode: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
