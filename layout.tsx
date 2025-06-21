import "./globals.css";


import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { trainings, trainers } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/logo";

export default function Home() {
  const featuredTrainings = trainings.slice(0, 3);
  const featuredTrainers = trainers.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-4 flex flex-col items-center gap-4">
            <Logo className="w-48 h-48 md:w-64 md:h-64" />
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">
                Persona Aesthetic
            </h1>
          </div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Unlock your potential with our world-class aesthetic training programs.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/trainings">Explore Trainings</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#trainers">Meet The Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="trainings" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Aesthetic Trainings</h2>
            <p className="max-w-xl mx-auto text-muted-foreground mt-2">
              Comprehensive courses designed for aspiring and established professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrainings.map((training) => (
              <Card key={training.id} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardHeader className="p-0">
                  <Image
                    src={training.imageUrl}
                    alt={training.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={training.aiHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-2xl mb-2">{training.name}</CardTitle>
                  <CardDescription>{training.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                   <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/trainings">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild>
              <Link href="/trainings">View All Trainings</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="trainers" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Meet Our Trainers</h2>
            <p className="max-w-xl mx-auto text-muted-foreground mt-2">
              Learn from the industry's most respected and experienced experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredTrainers.map((trainer) => (
               <Card key={trainer.id} className="text-center shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <CardContent className="p-6">
                  <Image
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4"
                    data-ai-hint={trainer.aiHint}
                  />
                  <CardTitle className="font-headline text-2xl mb-2">{trainer.name}</CardTitle>
                  <CardDescription>{trainer.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild>
              <Link href="/trainers">Meet All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
