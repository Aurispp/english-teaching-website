import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, UserCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ContactDialog = ({ t }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full bg-[#FF914D] hover:bg-[#FF914D]/90 text-white">
          {t.contact.button}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>{t.contact.dialog.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {t.contact.dialog.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-3 py-4">
          <Button
            variant="outline"
            className="w-full flex justify-center items-center gap-2 text-lg py-6"
            onClick={() => window.open('tel:+34684082221')}
          >
            <Phone className="h-5 w-5" />
            {t.contact.dialog.phone}
          </Button>
          <Button
            variant="outline"
            className="w-full flex justify-center items-center gap-2 text-lg py-6"
            onClick={() => window.open('https://wa.me/34684082221')}
          >
            <MessageCircle className="h-5 w-5" />
            {t.contact.dialog.whatsapp}
          </Button>
          <Button
            variant="outline"
            className="w-full flex justify-center items-center gap-2 text-lg py-6"
            onClick={() => window.open('mailto:aurienglish@gmail.com')}
          >
            <Mail className="h-5 w-5" />
            {t.contact.dialog.email}
          </Button>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>{t.contact.dialog.close}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const PricingSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-light mb-4">{t.title}</h2>
          <p className="text-lg text-[#FF914D] font-medium mb-2">{t.trialClass}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Private Classes Card */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <UserCircle className="h-6 w-6 text-[#FF914D]" />
                  {t.private.title}
                </CardTitle>
                <span className="text-2xl font-bold text-[#FF914D]">{t.private.price}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {t.private.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#FF914D] font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ContactDialog t={t} />
            </CardContent>
          </Card>

          {/* Group Classes Card */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Users className="h-6 w-6 text-[#FF914D]" />
                  {t.group.title}
                </CardTitle>
                <span className="text-2xl font-bold text-[#FF914D]">{t.group.price}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {t.group.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#FF914D] font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ContactDialog t={t} />
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

export default PricingSection;