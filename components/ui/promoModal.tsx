"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { isHoliday } from "@/utils/holidayChecker";
import { Plane } from 'lucide-react';

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [holiday, setHoliday] = useState<{ name: string; date: Date } | null>(null);

  useEffect(() => {
    const currentHoliday = isHoliday();
    if (currentHoliday) {
      setHoliday(currentHoliday);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full sm:max-w-[425px]">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-green-50 w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {holiday
                ? `${holiday.name} Special Offer!`
                : "Special Travel Offer!"}
            </DialogTitle>
            <DialogDescription className="text-center">
              Celebrate with our exclusive holiday deals!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 p-4">
            <Plane className="w-16 h-16 text-green-600" />
            <p className="text-lg font-semibold text-center">
              Get up to 30% off on selected tour packages!
            </p>
            <p className="text-sm text-gray-600 text-center">
              Book your dream vacation now and create unforgettable memories.
            </p>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => {
                setIsOpen(false);
                window.location.href = '/packages';
              }}
            >
              Explore Holiday Deals
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

