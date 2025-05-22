
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectItem } from '@/components/ui/select';

const carListings = [
  {
    name: 'Toyota Vios',
    price: 15000,
    image: '/cars/vios.png',
    bodyType: 'Sedan',
    term: '36 months',
    condition: 'New',
  },
  {
    name: 'Honda BR-V',
    price: 15000,
    image: '/cars/brv.png',
    bodyType: 'SUV',
    term: '36 months',
    condition: 'New',
  },
  {
    name: 'Toyota Wigo',
    price: 15000,
    image: '/cars/wigo.png',
    bodyType: 'Compact',
    term: '36 months',
    condition: 'New',
  },
  {
    name: 'BYD Dolphin',
    price: 36000,
    image: '/cars/dolphin.png',
    bodyType: 'EV',
    term: '36 months',
    condition: 'New',
  },
];

export default function NextCarHomepage() {
  const [budget, setBudget] = useState('');
  const [bodyType, setBodyType] = useState('All');

  const filteredCars = carListings.filter((car) => {
    const meetsBudget = budget === '' || car.price <= parseInt(budget);
    const matchesType = bodyType === 'All' || car.bodyType === bodyType;
    return meetsBudget && matchesType;
  });

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold text-blue-600">NEXTCAR</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#cars" className="text-sm font-medium">Browse Cars</a>
          <a href="#how-it-works" className="text-sm font-medium">How Leasing Works</a>
        </div>
        <Button className="bg-blue-600 text-white">Start Application</Button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Car. Zero Hassle. No Huge Downpayment.</h2>
        <p className="text-lg mb-6">The first car leasing platform in the Philippines — get approved in minutes.</p>
        <div className="space-x-4 mb-8">
          <a href="#cars"><Button className="bg-blue-600 text-white">Browse Cars</Button></a>
          <Button variant="outline">Check if You Qualify</Button>
        </div>
        <img src="/cars/vios.png" alt="Toyota Vios" className="w-full max-w-md" />
      </section>

      {/* Browse Cars Section */}
      <section id="cars" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-10">Browse Cars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Set Your Budget</label>
            <Input placeholder="Enter amount" value={budget} onChange={(e) => setBudget(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Body Type</label>
            <Select value={bodyType} onValueChange={setBodyType}>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Compact">Compact</SelectItem>
              <SelectItem value="Sedan">Sedan</SelectItem>
              <SelectItem value="SUV">SUV</SelectItem>
              <SelectItem value="EV">EV</SelectItem>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-blue-600 text-white">Search</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCars.map((car, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h4 className="text-xl font-bold mb-1">{car.name}</h4>
                <p className="text-blue-600 font-semibold mb-1">₱{car.price.toLocaleString()}/mo</p>
                <p className="text-sm text-gray-600 mb-4">{car.term} | {car.condition}</p>
                <Button className="w-full bg-gray-800 text-white">Lease Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-100 py-12 px-6">
        <h3 className="text-center text-2xl font-semibold mb-10">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardContent className="p-6">
              <div className="text-4xl mb-2">🚗</div>
              <h4 className="font-semibold text-lg mb-2">Choose Your Car</h4>
              <p>Select your ride from top models like Wigo, Vios, or BR-V.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-4xl mb-2">✅</div>
              <h4 className="font-semibold text-lg mb-2">Get Instant AI Approval</h4>
              <p>Link your GCash or bank — get your personalized offer in minutes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-4xl mb-2">🏁</div>
              <h4 className="font-semibold text-lg mb-2">Drive — We Deliver or You Pick Up</h4>
              <p>Fast, convenient handover anywhere in Metro Manila and beyond.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 px-6 text-center text-sm border-t">
        <div className="space-x-4">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
          <a href="#">Legal</a>
        </div>
        <div className="mt-2 text-gray-500">SEC • 📄 • 🧾 • 🔐</div>
      </footer>
    </div>
  );
}
