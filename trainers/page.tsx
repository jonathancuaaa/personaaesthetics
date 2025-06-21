import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { trainers } from "@/lib/data";

export default function TrainersPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">
            Expert Trainers
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mt-4">
            Learn from the best. Our trainers are industry leaders dedicated to sharing their knowledge and passion for aesthetics.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="text-center p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <CardContent className="p-0">
                   <Image
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    width={160}
                    height={160}
                    className="rounded-full mx-auto mb-6 border-4 border-primary/20"
                    data-ai-hint={trainer.aiHint}
                  />
                  <CardTitle className="font-headline text-2xl mb-2">{trainer.name}</CardTitle>
                  <CardDescription>{trainer.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
