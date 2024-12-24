import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../../types';

const faqs: FAQ[] = [
  {
    question: "What devices are compatible with your IPTV service?",
    answer: "Our service works on Smart TVs, Android boxes, iOS/Android devices, and computers. We provide dedicated apps and setup guides for each platform."
  },
  {
    question: "How many devices can I use simultaneously?",
    answer: "The number of simultaneous connections depends on your subscription plan. Basic allows 1 device, Premium allows 2 devices, and Family allows 4 devices."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and various cryptocurrencies for your convenience and security."
  },
  {
    question: "Is there a minimum subscription period?",
    answer: "No, you can choose between monthly, quarterly, or yearly subscriptions with no minimum commitment."
  }
];

function FAQItem({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-6 w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our service
          </p>
        </div>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}