import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-navy-gold relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-right space-y-6 order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair text-foreground animate-in fade-in slide-in-from-bottom duration-700">
              مرحبًا، أنا{" "}
              <span className="text-gradient-gold animate-glow">رسل محمد</span>
            </h1>
            
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: "200ms" }}>
              <p className="text-2xl md:text-3xl text-accent font-semibold">
                💼 خريجة إدارة أعمال – دفعة 2028
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                شغوفة بالقيادة، التطوير، وبناء المستقبل الإداري الحديث
              </p>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-6 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: "400ms" }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("#about")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold font-bold text-lg px-8 transition-all duration-300 hover:scale-105"
              >
                من أنا
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold text-lg px-8 transition-all duration-300 hover:scale-105"
              >
                تواصلي معي
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center animate-in fade-in slide-in-from-left duration-700" style={{ animationDelay: "600ms" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src={heroImage}
                alt="رسل محمد"
                className="relative rounded-2xl shadow-elegant w-full max-w-md animate-float"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-accent" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
