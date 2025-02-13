import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
  Users,
  CheckSquare,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is Flowx?",
    answer:
      "Flowx is a collaborative Kanban board designed to streamline team workflows, enhance productivity, and improve project visibility. It offers an intuitive interface with powerful features to manage tasks efficiently.",
  },
  {
    question: "How is Flowx different from other Kanban tools?",
    answer:
      "Flowx combines real-time collaboration with a user-friendly interface, making it ideal for both individuals and teams. With features like live updates, smart task automation, and seamless integrations, it stands out as a dynamic project management solution.",
  },
  {
    question: "Is Flowx suitable for remote teams?",
    answer:
      "Yes! Flowx is built for modern teams, whether in-office or remote. With real-time updates, team chat, and seamless collaboration features, it keeps everyone on the same page no matter where they are.",
  },
  {
    question: "What features does Flowx offer?",
    answer:
      "Flowx includes customizable Kanban boards, real-time collaboration, task automation, progress tracking, integrations with popular tools, and analytics to optimize your workflow. It's designed to make task management effortless.",
  },
  {
    question: "Can I manage multiple projects with Flowx?",
    answer:
      "Absolutely! Flowx allows you to manage multiple projects in one place. Easily switch between projects, assign tasks, and track progress to stay organized and efficient.",
  },
  {
    question: "Is Flowx easy to use for beginners?",
    answer:
      "Yes! Flowx is designed with simplicity in mind. Whether you're new to Kanban or an experienced project manager, the clean interface and intuitive drag-and-drop features make it easy to get started.",
  },
];


const features = [
  {
    title: "Seamless Team Collaboration",
    description:
      "Empower your team with a shared Kanban workspace that updates in real-time. Assign tasks, leave comments, and track progress effortlessly, ensuring everyone stays aligned.",
    icon: Users,
  },
  {
    title: "Smart Sprint Management",
    description:
      "Plan, prioritize, and execute sprints efficiently with intuitive task breakdowns, deadline tracking, and backlog management keeping your team focused and productive.",
    icon: CheckSquare,
  },
  {
    title: "Real-Time Insights & Reports",
    description:
      "Make data-driven decisions with live updates, detailed performance metrics, and customizable analytics. Get a clear overview of progress, blockers, and team efficiency at a glance.",
    icon: Activity,
  },
];



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Organize tasks effortlessly<br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with
            <Image
              src={"/logo3.jpg"}
              alt="flowx"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with our intuitive project management solution.
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-gray-200" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using Flowx to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
