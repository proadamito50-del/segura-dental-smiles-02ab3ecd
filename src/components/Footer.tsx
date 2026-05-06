import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 dental-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">Clínica Dental</h3>
                <p className="text-sm text-dental-medium font-medium -mt-1">del Segura</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Tu clínica dental de confianza en Murcia. Más de 20 años cuidando de tu sonrisa 
              con los mejores profesionales y la última tecnología.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-dental-medium transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/70 hover:text-dental-medium transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-primary-foreground/70 hover:text-dental-medium transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#clinica" className="text-primary-foreground/70 hover:text-dental-medium transition-colors">
                  Clínica
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/70 hover:text-dental-medium transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Limpieza Dental</li>
              <li>Ortodoncia</li>
              <li>Implantes</li>
              <li>Estética Dental</li>
              <li>Urgencias</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-dental-medium" />
                <a href="tel:968231632" className="hover:text-dental-medium transition-colors">
                  968 23 16 32
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-dental-medium" />
                <span>info@clinicadelsegura.es</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-dental-medium mt-0.5" />
                <span>Murcia, España</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="w-4 h-4 text-dental-medium mt-0.5" />
                <span>Lun-Vie: 9:00-20:00</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a 
                href="https://www.facebook.com/clinicadentaldelsegura" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-dental-medium transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/clinicadentaldelsegura/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-dental-medium transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Clínica Dental del Segura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
