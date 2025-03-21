
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon, Users, Ship, CheckCircle } from "lucide-react";

const TourBookingWidget: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [numPeople, setNumPeople] = useState("2");
  const [cruiseShip, setCruiseShip] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Booking Request Submitted",
        description: "We'll contact you shortly to confirm your booking.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="sticky top-6">
      <Card className="bg-white border-kalahari-brown/10 shadow-md">
        <CardHeader className="bg-kalahari-darkbrown text-white">
          <CardTitle className="font-serif text-xl text-center">Book Your Tour</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal border-kalahari-gravel/30"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-kalahari-brown" />
                    {date ? format(date, "PPP") : <span className="text-kalahari-charcoal/60">Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="people">Number of People</Label>
              <Select value={numPeople} onValueChange={setNumPeople}>
                <SelectTrigger className="w-full border-kalahari-gravel/30">
                  <SelectValue placeholder="Select number of people" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "person" : "people"}
                    </SelectItem>
                  ))}
                  <SelectItem value="11+">11+ people (Group booking)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cruise">Cruise Ship Name</Label>
              <div className="relative">
                <Ship className="absolute left-3 top-3 h-4 w-4 text-kalahari-brown/60" />
                <Input 
                  id="cruise"
                  value={cruiseShip}
                  onChange={(e) => setCruiseShip(e.target.value)}
                  className="pl-10 border-kalahari-gravel/30" 
                  placeholder="Enter your cruise ship name"
                />
              </div>
            </div>
            
            <div className="space-y-2 pt-2">
              <Button 
                type="submit" 
                className="w-full bg-kalahari-darkbrown hover:bg-kalahari-brown text-white"
                disabled={loading}
              >
                {loading ? "Processing..." : "Request Booking"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start bg-kalahari-sand/30 px-6 py-4 border-t border-kalahari-brown/10">
          <h4 className="font-medium text-kalahari-darkbrown mb-2">Included in All Tours:</h4>
          <ul className="space-y-2 text-sm text-kalahari-charcoal">
            <li className="flex items-start">
              <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
              <span>English speaking local guide</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
              <span>Transportation in air-conditioned vehicle</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
              <span>Lunch and non-alcoholic beverages</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
              <span>Pickup and drop-off at Walvis Bay Harbor</span>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TourBookingWidget;
