import React from "react";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";
import RegistrationForm from "@/components/RegistrationForm";
import { Button } from "@/components/ui/button";

const Logo = ({ size = 44 }: { size?: number }) => (
  <img
    src="/logo.jpg"
    alt="N&B Tennis Academy"
    width={size}
    height={size}
    style={{ width: size, height: size, objectFit: "contain", borderRadius: 8, background: "#fff" }}
  />
);

const TennisBallDecoration = ({ className }: { className?: string }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#B7D84B" fillOpacity="0.2" stroke="#B7D84B" strokeOpacity="0.4" strokeWidth="4"/>
    <path d="M20 20C40 30 50 50 50 80" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round"/>
    <path d="M80 20C60 30 50 50 50 80" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

function App() {
  const scrollToForm = () => {
    const el = document.getElementById('registration-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 flex items-center justify-between px-4 md:px-8 shadow-sm">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-bold text-xl md:text-2xl text-gray-900 tracking-tight">NB Tennis</span>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <a href="https://www.instagram.com/tennis.rasht.nazanin" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" aria-label="Instagram">
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://wa.me/989112420129" target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 text-gray-700 hover:text-[#25D366] hover:bg-[#25D366]/10 rounded-full transition-colors" aria-label="WhatsApp">
            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </header>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
          <TennisBallDecoration className="absolute -top-10 -right-10 w-64 h-64 md:w-96 md:h-96 opacity-60 rotate-45" />
          <TennisBallDecoration className="absolute bottom-20 -left-20 w-48 h-48 opacity-40 -rotate-12" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm md:text-base font-medium mb-4 shadow-sm border border-accent/30"
            >
              مربی نازنین بی‌آزار
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
            >
              آموزش تخصصی تنیس <br/>
              <span className="text-primary mt-2 block">در رشت</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              ثبت‌نام کلاس‌های خصوصی و نیمه خصوصی تنیس.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
            >
              برای شروع یادگیری تنیس یا ارتقای مهارت خود، فرم زیر را تکمیل کنید تا جهت هماهنگی کلاس با شما تماس گرفته شود
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="pt-8"
            >
              <Button onClick={scrollToForm} size="lg" className="h-16 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                ثبت درخواست کلاس
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 md:px-8 bg-white relative">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-cream rounded-3xl p-8 md:p-12 shadow-sm border border-orange-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-16 md:h-16 opacity-80">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2C16 6 18 10 18 12C18 14 16 18 12 22" />
                    <path d="M12 2C8 6 6 10 6 12C6 14 8 18 12 22" />
                  </svg>
                </div>
                <div className="text-center md:text-right space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">درباره مربی</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    آموزش تخصصی تنیس در رشت با بیش از ۱۰ سال سابقه فعالیت. برگزاری کلاس‌های خصوصی و نیمه خصوصی برای تمامی سنین و سطوح.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section id="registration-form" className="py-20 px-4 md:px-8 relative bg-gray-50/50">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              فرم ثبت‌نام شاگرد جدید
            </motion.h2>
            <p className="text-gray-600">لطفاً اطلاعات خود را با دقت وارد کنید</p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <RegistrationForm />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 md:px-8 bg-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">راه‌های ارتباطی</h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
              <a 
                href="https://www.instagram.com/tennis.rasht.nazanin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl w-full sm:w-auto min-w-[280px] transition-colors border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#E1306C] group-hover:scale-110 transition-transform">
                  <FaInstagram className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 font-medium">اینستاگرام مربی</p>
                  <p className="text-gray-900 font-bold font-sans" dir="ltr">@tennis.rasht.nazanin</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/989112420129" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 hover:bg-green-100 p-6 rounded-2xl w-full sm:w-auto min-w-[280px] transition-colors border border-green-100 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#25D366] group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-600 font-medium">واتساپ</p>
                  <p className="text-green-900 font-bold font-sans" dir="ltr">0911 242 0129</p>
                </div>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12 px-4 md:px-8 text-center text-gray-400">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <p className="text-lg font-semibold text-white mb-6">NB Tennis</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.instagram.com/tennis.rasht.nazanin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://wa.me/989112420129" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm opacity-60">© 2024 NB Tennis. تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}

export default App;
