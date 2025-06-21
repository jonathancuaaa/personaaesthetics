import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trainings } from "@/lib/data";

export default function TrainingsPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">
            Our Trainings
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mt-4">
            Explore our comprehensive suite of aesthetic training programs, meticulously designed to elevate your skills and career.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((training) => (
              <Card key={training.id} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardHeader className="p-0">
                  <Image
                    src={training.imageUrl}
                    alt={training.name}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    data-ai-hint={training.aiHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-2xl mb-2">{training.name}</CardTitle>
                  <CardDescription>{training.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
