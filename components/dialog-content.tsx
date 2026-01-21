"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import { Loader2, ShoppingCart, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

import { CourseFeatured } from "@/data/featuredCourse";
import { Course } from "@/data/courses";

interface DialogContenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: CourseFeatured | Course;
}

/* ---------------------------------------
   Pays + indicatifs
---------------------------------------- */
export const COUNTRY_CODES = [
  { iso: "AF", code: "+93", label: "Afghanistan" },
  { iso: "AL", code: "+355", label: "Albania" },
  { iso: "DZ", code: "+213", label: "Algeria" },
  { iso: "AS", code: "+1", label: "American Samoa" },
  { iso: "AD", code: "+376", label: "Andorra" },
  { iso: "AO", code: "+244", label: "Angola" },
  { iso: "AI", code: "+1", label: "Anguilla" },
  { iso: "AG", code: "+1", label: "Antigua and Barbuda" },
  { iso: "AR", code: "+54", label: "Argentina" },
  { iso: "AM", code: "+374", label: "Armenia" },
  { iso: "AW", code: "+297", label: "Aruba" },
  { iso: "AU", code: "+61", label: "Australia" },
  { iso: "AT", code: "+43", label: "Austria" },
  { iso: "AZ", code: "+994", label: "Azerbaijan" },

  { iso: "BS", code: "+1", label: "Bahamas" },
  { iso: "BH", code: "+973", label: "Bahrain" },
  { iso: "BD", code: "+880", label: "Bangladesh" },
  { iso: "BB", code: "+1", label: "Barbados" },
  { iso: "BY", code: "+375", label: "Belarus" },
  { iso: "BE", code: "+32", label: "Belgium" },
  { iso: "BZ", code: "+501", label: "Belize" },
  { iso: "BJ", code: "+229", label: "Benin" },
  { iso: "BM", code: "+1", label: "Bermuda" },
  { iso: "BT", code: "+975", label: "Bhutan" },
  { iso: "BO", code: "+591", label: "Bolivia" },
  { iso: "BA", code: "+387", label: "Bosnia and Herzegovina" },
  { iso: "BW", code: "+267", label: "Botswana" },
  { iso: "BR", code: "+55", label: "Brazil" },
  { iso: "BN", code: "+673", label: "Brunei" },
  { iso: "BG", code: "+359", label: "Bulgaria" },
  { iso: "BF", code: "+226", label: "Burkina Faso" },
  { iso: "BI", code: "+257", label: "Burundi" },

  { iso: "KH", code: "+855", label: "Cambodia" },
  { iso: "CM", code: "+237", label: "Cameroon" },
  { iso: "CA", code: "+1", label: "Canada" },
  { iso: "CV", code: "+238", label: "Cape Verde" },
  { iso: "CF", code: "+236", label: "Central African Republic" },
  { iso: "TD", code: "+235", label: "Chad" },
  { iso: "CL", code: "+56", label: "Chile" },
  { iso: "CN", code: "+86", label: "China" },
  { iso: "CO", code: "+57", label: "Colombia" },
  { iso: "KM", code: "+269", label: "Comoros" },
  { iso: "CG", code: "+242", label: "Congo" },
  { iso: "CD", code: "+243", label: "Congo (DRC)" },
  { iso: "CR", code: "+506", label: "Costa Rica" },
  { iso: "CI", code: "+225", label: "Côte d’Ivoire" },
  { iso: "HR", code: "+385", label: "Croatia" },
  { iso: "CU", code: "+53", label: "Cuba" },
  { iso: "CY", code: "+357", label: "Cyprus" },
  { iso: "CZ", code: "+420", label: "Czech Republic" },

  { iso: "DK", code: "+45", label: "Denmark" },
  { iso: "DJ", code: "+253", label: "Djibouti" },
  { iso: "DM", code: "+1", label: "Dominica" },
  { iso: "DO", code: "+1", label: "Dominican Republic" },

  { iso: "EC", code: "+593", label: "Ecuador" },
  { iso: "EG", code: "+20", label: "Egypt" },
  { iso: "SV", code: "+503", label: "El Salvador" },
  { iso: "EE", code: "+372", label: "Estonia" },
  { iso: "ET", code: "+251", label: "Ethiopia" },

  { iso: "FI", code: "+358", label: "Finland" },
  { iso: "FR", code: "+33", label: "France" },

  { iso: "GA", code: "+241", label: "Gabon" },
  { iso: "GM", code: "+220", label: "Gambia" },
  { iso: "GE", code: "+995", label: "Georgia" },
  { iso: "DE", code: "+49", label: "Germany" },
  { iso: "GH", code: "+233", label: "Ghana" },
  { iso: "GR", code: "+30", label: "Greece" },
  { iso: "GT", code: "+502", label: "Guatemala" },
  { iso: "GN", code: "+224", label: "Guinea" },

  { iso: "HT", code: "+509", label: "Haiti" },
  { iso: "HN", code: "+504", label: "Honduras" },
  { iso: "HK", code: "+852", label: "Hong Kong" },
  { iso: "HU", code: "+36", label: "Hungary" },

  { iso: "IS", code: "+354", label: "Iceland" },
  { iso: "IN", code: "+91", label: "India" },
  { iso: "ID", code: "+62", label: "Indonesia" },
  { iso: "IR", code: "+98", label: "Iran" },
  { iso: "IQ", code: "+964", label: "Iraq" },
  { iso: "IE", code: "+353", label: "Ireland" },
  { iso: "IL", code: "+972", label: "Israel" },
  { iso: "IT", code: "+39", label: "Italy" },

  { iso: "JP", code: "+81", label: "Japan" },
  { iso: "JO", code: "+962", label: "Jordan" },

  { iso: "KE", code: "+254", label: "Kenya" },
  { iso: "KW", code: "+965", label: "Kuwait" },
  { iso: "KG", code: "+996", label: "Kyrgyzstan" },

  { iso: "LA", code: "+856", label: "Laos" },
  { iso: "LV", code: "+371", label: "Latvia" },
  { iso: "LB", code: "+961", label: "Lebanon" },
  { iso: "LS", code: "+266", label: "Lesotho" },
  { iso: "LR", code: "+231", label: "Liberia" },
  { iso: "LY", code: "+218", label: "Libya" },
  { iso: "LT", code: "+370", label: "Lithuania" },
  { iso: "LU", code: "+352", label: "Luxembourg" },

  { iso: "MG", code: "+261", label: "Madagascar" },
  { iso: "MW", code: "+265", label: "Malawi" },
  { iso: "MY", code: "+60", label: "Malaysia" },
  { iso: "MV", code: "+960", label: "Maldives" },
  { iso: "ML", code: "+223", label: "Mali" },
  { iso: "MT", code: "+356", label: "Malta" },
  { iso: "MA", code: "+212", label: "Morocco" },
  { iso: "MX", code: "+52", label: "Mexico" },

  { iso: "NL", code: "+31", label: "Netherlands" },
  { iso: "NZ", code: "+64", label: "New Zealand" },
  { iso: "NG", code: "+234", label: "Nigeria" },
  { iso: "NO", code: "+47", label: "Norway" },

  { iso: "PK", code: "+92", label: "Pakistan" },
  { iso: "PA", code: "+507", label: "Panama" },
  { iso: "PE", code: "+51", label: "Peru" },
  { iso: "PH", code: "+63", label: "Philippines" },
  { iso: "PL", code: "+48", label: "Poland" },
  { iso: "PT", code: "+351", label: "Portugal" },

  { iso: "QA", code: "+974", label: "Qatar" },

  { iso: "RO", code: "+40", label: "Romania" },
  { iso: "RU", code: "+7", label: "Russia" },

  { iso: "SA", code: "+966", label: "Saudi Arabia" },
  { iso: "SN", code: "+221", label: "Senegal" },
  { iso: "RS", code: "+381", label: "Serbia" },
  { iso: "SG", code: "+65", label: "Singapore" },
  { iso: "SK", code: "+421", label: "Slovakia" },
  { iso: "SI", code: "+386", label: "Slovenia" },
  { iso: "ZA", code: "+27", label: "South Africa" },
  { iso: "KR", code: "+82", label: "South Korea" },
  { iso: "ES", code: "+34", label: "Spain" },
  { iso: "SE", code: "+46", label: "Sweden" },
  { iso: "CH", code: "+41", label: "Switzerland" },

  { iso: "TH", code: "+66", label: "Thailand" },
  { iso: "TN", code: "+216", label: "Tunisia" },
  { iso: "TR", code: "+90", label: "Turkey" },

  { iso: "UA", code: "+380", label: "Ukraine" },
  { iso: "AE", code: "+971", label: "United Arab Emirates" },
  { iso: "GB", code: "+44", label: "United Kingdom" },
  { iso: "US", code: "+1", label: "United States" },
  { iso: "UY", code: "+598", label: "Uruguay" },

  { iso: "VE", code: "+58", label: "Venezuela" },
  { iso: "VN", code: "+84", label: "Vietnam" },

  { iso: "ZM", code: "+260", label: "Zambia" },
  { iso: "ZW", code: "+263", label: "Zimbabwe" },
];

export default function DialogContenu({
  open,
  onOpenChange,
  course,
}: DialogContenuProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+33");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  /* ---------------------------------------
     Auto-sélection pays via IP (client only)
  ---------------------------------------- */
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data?.country_code) {
          const match = COUNTRY_CODES.find((c) => c.iso === data.country_code);
          if (match) setCountryCode(match.code);
        }
      } catch {
        // fallback silencieux
      }
    };

    detectCountry();
  }, []);

  /* ---------------------------------------
     Submit
  ---------------------------------------- */
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) return;

    const fullPhone =
      phoneNumber.trim() !== ""
        ? `${countryCode}${phoneNumber.replace(/\s+/g, "")}`
        : "";

    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course.id,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: fullPhone,
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        alert("Error creating checkout session.");
      }
    } catch {
      alert("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.code === countryCode) ?? COUNTRY_CODES[1];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Enroll in {course?.name}
          </DialogTitle>
          <DialogDescription>
            Complete your information to proceed to secure payment
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleCheckout} className="space-y-4">
          {/* NAME */}
          <div className="space-y-2">
            <Label>Full Name *</Label>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              disabled={isLoading}
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label>Email *</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              disabled={isLoading}
            />
          </div>

          {/* PHONE */}
          <div className="space-y-2">
            <Label>Phone *</Label>

            <div className="flex gap-2">
              {/* COUNTRY DROPDOWN */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="w-[150px] justify-between"
                    disabled={isLoading}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={`https://flagcdn.com/h20/${selectedCountry.iso.toLowerCase()}.png`}
                        alt={selectedCountry.label}
                        height={20}
                        width={30}
                        sizes="20px"
                        className="rounded-sm border"
                      />
                      <span className="text-sm">{countryCode}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  side="bottom"
                  align="start"
                  sideOffset={6}
                  className="w-[320px] max-h-[300px] overflow-y-auto p-0"
                  onWheelCapture={(e) => e.stopPropagation()}
                >
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>

                    <CommandGroup>
                      {COUNTRY_CODES.map((country) => (
                        <CommandItem
                          key={country.code}
                          value={`${country.label} ${country.code}`}
                          onSelect={() => setCountryCode(country.code)}
                          className="flex items-center gap-3"
                        >
                          <Image
                            src={`https://flagcdn.com/h20/${country.iso.toLowerCase()}.png`}
                            alt={country.label}
                            height={20}
                            width={30}
                            sizes="20px"
                            className="rounded-sm border"
                          />

                          <span className="flex-1 text-sm">
                            {country.label}
                          </span>

                          <span className="text-xs text-muted-foreground">
                            {country.code}
                          </span>

                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              countryCode === country.code
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              {/* PHONE INPUT */}
              <Input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
          </div>

          {/* ACTIONS */}
          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-pink-600 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Proceed to Payment
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
